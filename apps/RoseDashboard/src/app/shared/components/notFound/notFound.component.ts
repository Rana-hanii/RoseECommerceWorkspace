import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, RouterLink],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss',
})
export class NotFoundComponent {}
