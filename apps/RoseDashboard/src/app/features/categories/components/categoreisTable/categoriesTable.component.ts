import { Component, DestroyRef, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTableComponent } from 'apps/RoseDashboard/src/app/shared/components/sectionTable/sectionTable.component';
import { map, Observable } from 'rxjs';
import { CategoriesRes, Category } from '../../interfaces/categories-res';
import { CategoriesService } from '../../services/categories.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-table',
  imports: [CommonModule, SectionTableComponent],
  templateUrl: './categoriesTable.component.html',
  styleUrl: './categoriesTable.component.scss',
})
export class CategoriesTableComponent {
  private readonly _categoriesService = inject(CategoriesService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastrService = inject(ToastrService);
  categories$!: Observable<Category[]>;

  columns = [
    { field: 'name', header: 'Name' },
    { field: 'productsCount', header: 'Products' },
  ];

  filterFields = ['name', 'productsCount'];
  addRoute = input<string>('');

  onRowSelect(row: any) {
    console.log('Selected Row:', row);
  }

  ngOnInit(): void {
    this.getProductList();
  }

  handelDelete(row: any): void {
    this._categoriesService
      .deleteCategory(row._id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._toastrService.success(
            'Item deleted successfully 🗑️',
            res.message
          );
          this.getProductList();
          console.log(res, 'Category Del');
        },
      });
  }

  getProductList(): void {
    this.categories$ = this._categoriesService
      .getAllCategories()
      .pipe(map((res: CategoriesRes) => res.categories));
  }
}
