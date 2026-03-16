import { ToastrService } from 'ngx-toastr';
import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OccasionsService } from '../../services/occasionsService/occasions.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Occasion } from '../../interfaces/get-occasion';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-update-occasions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessageModule],
  templateUrl: './updateOccasions.component.html',
  styleUrl: './updateOccasions.component.scss',
})
export class UpdateOccasionsComponent implements OnInit {
  private readonly _fb = inject(FormBuilder);
  private readonly _occasionsService = inject(OccasionsService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastrService = inject(ToastrService);
  id!: string | null;
  occasionData = signal<Occasion | null>(null);
  showImage = signal(false);
  updateForm = this._fb.group({
    name: ['', [Validators.required]],
    image: [null as File | null],
  });

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.updateForm.patchValue({ image: file });
    }
  }
  toggleImage() {
    this.showImage.set(!this.showImage());
  }
  getOccasionById(): void {
    this._activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (!id) return [];

          this.id = id;
          return this._occasionsService.getOccasionId(id);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: (res) => {
          this.occasionData.set(res.occasion);
          this.updateForm.patchValue({
            name: res.occasion.name,
          });
        },
      });
  }
  ngOnInit(): void {
    this.getOccasionById();
  }
  onSubmit(): void {
    if (this.updateForm.valid && this.id) {
      const formData = new FormData();
      formData.append('name', this.updateForm.get('name')?.value || '');

      const imageFile = this.updateForm.get('image')?.value;
      if (imageFile) {
        formData.append('image', imageFile);
      }

      this._occasionsService.updateOccasion(this.id, formData).subscribe({
        next: (res) => {
          this._toastrService.success('update Succssusfly', res.message);
        },
      });
    }
  }
}
