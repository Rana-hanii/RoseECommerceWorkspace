import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/Category.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastrService } from 'ngx-toastr';
import { Category, GetCategory } from '../../interface/get-category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputTextModule],
  templateUrl: './updateCategory.component.html',
  styleUrl: './updateCategory.component.scss',
})
export class UpdateCategoryComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _categoryService = inject(CategoryService);
  private readonly _fb = inject(FormBuilder);
  private readonly _toastrService = inject(ToastrService);
  private readonly _destroyRef = inject(DestroyRef);
  id: string | null = null;
  category: Category | null = null;
  showImage = false;
  categoryForm = this._fb.group({
    name: [''],
    image: [null as string | null],
  });

  getCategoryId(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (urlPrams) => {
        this.id = urlPrams.get('id');
        if (this.id) {
          this._categoryService
            .getCategory(this.id)
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe({
              next: (res: GetCategory) => {
                if (res.category) {
                  this.category = res.category;

                  this.categoryForm.patchValue({
                    name: res.category.name,
                    image: res.category.image,
                  });
                }
              },
            });
        }
      },
    });
  }

  ngOnInit(): void {
    this.getCategoryId();
  }
  updateCategory(): void {
    if (!this.id || this.categoryForm.invalid) {
      return;
    }
    const dataToUpdate = {
      name: this.categoryForm.value.name,
    };
    this._categoryService
      .updateCategory(this.id, dataToUpdate)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._toastrService.success(
            'Category updated successfully!',
            'Updated'
          );
          console.log(res);
        },
      });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
