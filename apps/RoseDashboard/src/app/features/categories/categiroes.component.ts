import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CategoryService } from './services/Category.service';
import { Category } from './interface/all-categories';
import { Tooltip } from 'primeng/tooltip';
@Component({
  selector: 'app-categiroes',
  standalone: true,
  imports: [TableModule, Tooltip],
  templateUrl: './categiroes.component.html',
  styleUrl: './categiroes.component.scss',
})
export class CategoriesComponent implements OnInit {
  private readonly _categoryService = inject(CategoryService);
  private readonly _destroyRef = inject(DestroyRef);
  category!: Category[];
  currentPage!: number;
  limit!: number;
  totalPages!: number;
  totalItems!: number;
  getAllCategory(): void {
    this._categoryService
      .getAllCategory()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.category = res.categories;
          this.currentPage = res.metadata.currentPage;
          this.limit = res.metadata.limit;
          this.totalPages = res.metadata.totalPages;
          this.totalItems = res.metadata.totalItems;
        },
      });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'unqualified':
  //       return 'danger';

  //     case 'qualified':
  //       return 'success';

  //     case 'new':
  //       return 'info';

  //     case 'negotiation':
  //       return 'warn';

  //     case 'renewal':
  //       return null;
  //   }
  // }
}
