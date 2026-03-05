import { Component, input, output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';


@Component({
  selector: 'app-table',
  imports: [CommonModule ,TableModule ,InputTextModule , IconField ,Dialog, ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
    @ViewChild('dt') table!: Table;

  placeholder=input<string>('')

  value = input<any[]|null>([]);
  columns = input<any[]>([]);
  globalFilterFields = input<string[]>([]);
  rows = input<number>(12);

  selection = output<any>();
  searchChange = output<string>();

  onGlobalSearch(value: string) {
    this.table?.filterGlobal(value, 'contains');
    this.searchChange.emit(value);
  }

  // showing popup when click on the row in mobile first
  visible: boolean = false;

    showDialog() {
       if (window.innerWidth < 768) {
            this.visible = true;
          }
    }


}
