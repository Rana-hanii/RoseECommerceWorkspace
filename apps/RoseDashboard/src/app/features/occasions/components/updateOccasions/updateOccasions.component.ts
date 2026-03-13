import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { OccasionsService } from '../../services/occasionsService/occasions.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-occasions',
  imports: [CommonModule],
  templateUrl: './updateOccasions.component.html',
  styleUrl: './updateOccasions.component.scss',
})
export class UpdateOccasionsComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _occasionsService = inject(OccasionsService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  id!: string | null;
  occasions: any;
  updateForm = this._fb.group({
    name: [''],
  });

  // getOccasionsId(): void {
  //   this._activatedRoute.paramMap.subscribe({
  //     next: (urlPrams) => {
  //       this.id = urlPrams.get('id');

  //       if (this.id) {
  //         this._occasionsService
  //           .getAllOccasion()
  //           .pipe(takeUntilDestroyed(this._destroyRef))
  //           .subscribe({
  //             next: (res) => {
  //               console.log(res);
  //               this.occasions = res;
  //               // this.updateForm.patchValue({ name: res.occasions.name });
  //             },
  //           });
  //       }
  //     },
  //   });
  // }  
}
