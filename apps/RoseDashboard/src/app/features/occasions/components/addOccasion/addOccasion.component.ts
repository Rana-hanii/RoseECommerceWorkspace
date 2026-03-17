import { ToastrService } from 'ngx-toastr';
import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageModule } from 'primeng/message';
import { OccasionsService } from '../../services/occasions.service';
@Component({
  selector: 'app-add-occasion',
  imports: [
    CommonModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  templateUrl: './addOccasion.component.html',
  styleUrl: './addOccasion.component.scss',
})
export class AddOccasionComponent {
  private readonly _occasionsService = inject(OccasionsService);
  private readonly _fb = inject(FormBuilder);
  private readonly _toastrService = inject(ToastrService);
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);

  selectedFile!: File;
  occasionsForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: [null, [Validators.required]],
  });
  onFileSelect(event: any) {
    const file = event.files[0];

    if (file) {
      this.selectedFile = file;
      this.occasionsForm.patchValue({ image: file });
      this.occasionsForm.get('image')?.markAsTouched();
    }
  }
  submitForm(): void {
    if (this.occasionsForm.invalid) {
      this.occasionsForm.markAllAsTouched();

      return;
    }

    const formData = new FormData();
    formData.append('name', this.occasionsForm.value.name || '');
    formData.append('image', this.selectedFile!);

    this._occasionsService
      .addOccasion(formData)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._toastrService.success(
            'The occasion was added successfully!',
            res.message
          );
          this._router.navigate(['/dash/occasions']);
          console.log(res);
        },
      });
  }
}
