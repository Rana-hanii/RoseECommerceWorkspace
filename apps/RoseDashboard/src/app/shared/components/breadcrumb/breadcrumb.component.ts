import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule , Breadcrumb, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
   items: MenuItem[] | undefined;

    home: MenuItem | undefined;

 ngOnInit() {
        this.items = [
          { icon: 'pi pi-home', route: '/installation' }, 
          { label: 'Components' , route: '/installation' },
          { label: 'Form' , route: '/installation' },
          { label: 'InputText', route: '/inputtext' }];
    }

}
