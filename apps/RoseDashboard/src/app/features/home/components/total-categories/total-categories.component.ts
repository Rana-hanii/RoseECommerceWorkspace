import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-total-categories',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './total-categories.component.html',
  styleUrl: './total-categories.component.scss',
})
export class TotalCategoriesComponent {
  products!: [];
}
