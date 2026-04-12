import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OccasionsService } from './services/occasions.service';
import { Document } from './interfaces/delete-occasion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-occasions',
  imports: [CommonModule, RouterModule],
  templateUrl: './occasions.component.html',
  styleUrl: './occasions.component.scss',
})
export class OccasionsComponent {
  private readonly _occasionsService = inject(OccasionsService);
  private readonly _destroyRef = inject(DestroyRef);
  handelDelete(row: Document) {
    this._occasionsService
      .deleteOccasion(row._id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          // console.log(res);
        },
      });
  }
}
