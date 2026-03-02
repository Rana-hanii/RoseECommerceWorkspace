import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../categories/services/Category.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _categoryService = inject(CategoryService);
  currentPage!: number;
  totalPages!: number;
  getAllCategories() {
    this._categoryService.getAllCategory().subscribe({
      next: (res) => {
        this.currentPage = res.metadata.currentPage;
        this.totalPages = res.metadata.totalPages;
        console.log(res.categories);
      },
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
}
