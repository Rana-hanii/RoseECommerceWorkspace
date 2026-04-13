import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'apps/RoseDashboard/src/app/shared/components/button/button.component';
import { MessageModule } from 'primeng/message';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GetCategory } from '../../interfaces/get-category';

@Component({
  selector: 'app-update-categories',
  imports: [CommonModule, ReactiveFormsModule, MessageModule, ButtonComponent],
  templateUrl: './updateCategories.component.html',
  styleUrl: './updateCategories.component.scss',
})
export class UpdateCategoriesComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _categoriesService = inject(CategoriesService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastrService = inject(ToastrService);
  public readonly _router = inject(Router);
  id!: string;
  imagePreview = signal<string | null>(null);
  showImage = signal(true);
  categoryData = signal<GetCategory | null>(null);
  updateForm = this._fb.group({
    name: ['', [Validators.required]],
    image: [null as File | null],
  });
  getCategoryById() {
    this._activatedRoute.paramMap
      .pipe(
        switchMap((prams) => {
          const id = prams.get('id');
          if (!id) return EMPTY;
          this.id = id;
          return this._categoriesService.getCategory(id);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (res) => {
          this.categoryData.set(res);
          this.updateForm.patchValue({ name: res.category.name });
          this.imagePreview.set(res.category.image);
        },
      });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.updateForm.patchValue({ image: file });
      const objectUrl = URL.createObjectURL(file);
      this.imagePreview.set(objectUrl);
      this.showImage.set(true);
    }
  }
  ngOnInit(): void {
    this.getCategoryById();
  }

  onSubmit(): void {
    if (this.updateForm.valid && this.id) {
      const formData = new FormData();
      formData.append('name', this.updateForm.get('name')?.value || '');

      const imageFile = this.updateForm.get('image')?.value;

      if (imageFile) {
        formData.append('image', imageFile);
      }

      this._categoriesService.updateCategory(this.id, formData).subscribe({
        next: (res) => {
          this._toastrService.success('Category updated successfully ✨');
          this._router.navigate(['/dash/occasions']);
        },
      });
    }
  }
}
