import { Component, inject, input, output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { Dialog } from 'primeng/dialog';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    IconField,
    Dialog,
    ButtonModule,
    RouterLink,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class TableComponent {
  private confirmationService = inject(ConfirmationService);
  onDeleteActionRow(row: any) {
    if (!row) return;

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this item?',
      header: 'Delete Confirmation',
      accept: () => {
        this.deleteAction.emit(row);
        this.visible = false;
        this.confirmationService.close();
      },
      reject: () => {
        this.confirmationService.close();
      },
    });
  }
  @ViewChild('dt') table!: Table;
  @ViewChild('cd') confirmDialog!: ConfirmDialog;
  onConfirmAccept() {
    (this.confirmDialog as any).onAccept();
  }

  onConfirmReject() {
    (this.confirmDialog as any).onReject();
  }
  placeholder = input<string>('');
  addRoute = input<string>('');
  editBaseRoute = input<string>('');
  value = input<any[] | null>([]);
  columns = input<any[]>([]);
  globalFilterFields = input<string[]>([]);
  rows = input<number>(12);
  selection = output<any>();
  searchChange = output<string>();
  selectedRow: any = null;
  deleteAction = output<any>();

  onDeleteAction(row: any) {
    this.deleteAction.emit(row);
  }
  onGlobalSearch(value: string) {
    this.table?.filterGlobal(value, 'contains');
    this.searchChange.emit(value);
  }

  visible = false;

  showDialog(row: any) {
    if (window.innerWidth < 768) {
      this.selectedRow = row;
      this.visible = true;
    }
  }
}
