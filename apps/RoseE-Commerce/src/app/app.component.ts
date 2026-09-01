import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toast } from 'primeng/toast';
import { DarkModeService } from './shared/services/dark-mode/dark-mode.service';

@Component({
  imports: [RouterModule, Toast],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RoseE-Commerce';

  private readonly darkMode=inject(DarkModeService)

  ngOnInit(): void {
      
  }
}
