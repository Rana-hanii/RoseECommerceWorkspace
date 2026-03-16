import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OccasionsService } from './services/occasionsService/occasions.service';

@Component({
  selector: 'app-occasions',
  imports: [CommonModule, RouterModule],
  templateUrl: './occasions.component.html',
  styleUrl: './occasions.component.scss',
})
export class OccasionsComponent {
  private readonly _occasionsService = inject(OccasionsService);
  handelDelete(row: any) {
    this._occasionsService.deleteOccasion(row._id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
