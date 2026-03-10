import { ToastrService } from 'ngx-toastr';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CategoryService } from '../../services/Category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  templateUrl: './addCategory.component.html',
  styleUrl: './addCategory.component.scss',
})
export class AddCategoryComponent {
  private readonly fb = inject(FormBuilder);
  private readonly _categoryService = inject(CategoryService);
  private readonly _toster = inject(ToastrService);
  private readonly _router = inject(Router);

  categoryForm = this.fb.group({
    name: ['', Validators.required],
    image: [null as File | null, Validators.required],
  });
  onFileSelected(event: FileSelectEvent) {
    if (event.files && event.files.length > 0) {
      const file = event.files[0] as File;
      this.categoryForm.patchValue({ image: file });
    }
  }

  Submit() {
    if (this.categoryForm.valid) {
      const payload = new FormData();

      payload.append('name', this.categoryForm.value.name!);
      payload.append('image', this.categoryForm.value.image!);

      this._categoryService.addCategory(payload).subscribe({
        next: (res) => {
          console.log(res);
          this._toster.success(
            'Category created successfully!',
            'successfully'
          );
          this._router.navigate(['/dash/categories']);
        },
      });
    }
  }
}
