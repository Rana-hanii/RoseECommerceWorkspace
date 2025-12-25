import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from './shared/services/dark-mode/dark-mode.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RoseE-Commerce';

  private readonly darkMode=inject(DarkModeService)

  ngOnInit(): void {
      this.darkMode.init()
  }
}
