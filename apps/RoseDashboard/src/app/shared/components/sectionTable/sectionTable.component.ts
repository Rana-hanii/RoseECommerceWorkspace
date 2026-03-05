import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { SearchComponent } from "../search/search.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-section-table',
  imports: [CommonModule, ButtonComponent, SearchComponent, TableComponent],
  templateUrl: './sectionTable.component.html',
  styleUrl: './sectionTable.component.scss',
})
export class SectionTableComponent {
  // title
  mainTitle=input<string>('')
  // button
  buttonIcon=input<string>('')
  buttonTitle=input<string>('')


  // search
  // searchValue = input<string>('');
  // searchChange = output<string>();


  // table
  tableData = input<any[]|null>(null);
  columns = input<any[]>([]);
  filterFields = input<string[]>([]);
  placeholder = input<string>('');
  rowSelect = output<any>();

}
