import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CategoryService } from './services/Category.service';
import { Category } from './interface/all-categories';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-categiroes',
  standalone: true,
  imports: [
    SelectModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    TableModule,
    TagModule,
    InputTextModule,
    Menu,
    Button,
    RouterLink,
    RouterOutlet,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './categiroes.component.html',
  styleUrl: './categiroes.component.scss',
})
export class CategoriesComponent implements OnInit {
  private readonly _categoryService = inject(CategoryService);
  private readonly _destroyRef = inject(DestroyRef);
  public readonly router = inject(Router);
  loading = true;
  items: MenuItem[] | undefined;
  selectedCategory: any;
  category!: Category[];
  currentPage!: number;
  limit!: number;
  totalPages!: number;
  totalItems!: number;
  visible = false;

  @ViewChild('dt1') dt1!: Table;
  getAllCategory(): void {
    this._categoryService
      .getAllCategory()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.category = res.categories;

          this.currentPage = res.metadata.currentPage;
          this.limit = res.metadata.limit;
          this.totalPages = res.metadata.totalPages;
          this.totalItems = res.metadata.totalItems;
          this.loading = false;
        },
      });
  }

  deleteCategory(): void {
    this._categoryService
      .deleteCategory(this.selectedCategory._id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt1.filterGlobal(input.value, 'contains');
  }

  showDialog() {
    this.visible = true;
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
