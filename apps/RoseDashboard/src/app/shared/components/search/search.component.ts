import { InputTextModule } from 'primeng/inputtext';
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule,InputTextModule , FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  placeholder=input<string>('')
  value=input<string>('')

  valueChange=output<string>()

}
