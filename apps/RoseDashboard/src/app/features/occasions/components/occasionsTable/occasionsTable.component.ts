import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SectionTableComponent } from 'apps/RoseDashboard/src/app/shared/components/sectionTable/sectionTable.component';
import { map, Observable } from 'rxjs';
import { Occasion, OccasionsRes } from '../../interfaces/occasions-res';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToastrService } from 'ngx-toastr';
import { OccasionsService } from '../../services/occasions.service';
@Component({
  selector: 'app-occasions-table',
  imports: [
    CommonModule,
    SectionTableComponent,
    RouterModule,
    AsyncPipe,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './occasionsTable.component.html',
  styleUrl: './occasionsTable.component.scss',
})
export class OccasionsTableComponent implements OnInit {
  private readonly occasionsService = inject(OccasionsService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastrService = inject(ToastrService);
  occasions$!: Observable<Occasion[]>;

  columns = [
    { field: 'name', header: 'Name' },
    { field: 'productsCount', header: 'Products' },
  ];

  filterFields = ['name', 'productsCount'];
  addRoute = input<string>('');

  onRowSelect(row: any) {
    console.log('Selected Row:', row);
  }

  ngOnInit(): void {
    this.getProductList();
  }
  handelDelete(row: any) {
    this.occasionsService
      .deleteOccasion(row._id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._toastrService.success(
            'Item deleted successfully 🗑️',
            res.message
          );
          this.getProductList();
        },
      });
  }

  getProductList(): void {
    this.occasions$ = this.occasionsService
      .getAllOccasion()
      .pipe(map((res: OccasionsRes) => res.occasions));
  }
}
