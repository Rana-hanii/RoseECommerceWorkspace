import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './notFoundPage.component.html',
  styleUrl: './notFoundPage.component.scss',
})
export class NotFoundPageComponent {}
