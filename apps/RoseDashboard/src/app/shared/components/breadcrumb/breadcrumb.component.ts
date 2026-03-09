import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule , Breadcrumb, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
 breadCrumb=inject(BreadcrumbService)



}
