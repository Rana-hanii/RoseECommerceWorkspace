import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-error-msg',
  imports: [CommonModule , Message],
  templateUrl: './errorMsg.component.html',
  styleUrl: './errorMsg.component.scss',
})
export class ErrorMsgComponent {

  @Input() control!: AbstractControl;
  @Input() label= '';
  @Input() type = '';



}
