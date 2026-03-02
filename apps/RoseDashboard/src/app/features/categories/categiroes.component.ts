import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './services/Category.service';
@Component({
  selector: 'app-categiroes',
  imports: [CommonModule],
  templateUrl: './categiroes.component.html',
  styleUrl: './categiroes.component.scss',
})
export class CategoriesComponent {
  private readonly cc = inject(CategoryService);
}
