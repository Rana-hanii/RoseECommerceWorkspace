import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reusable-input',
  imports: [CommonModule],
  templateUrl: './reusable-input.component.html',
  styleUrl: './reusable-input.component.css',
})
export class ReusableInputComponent {}
