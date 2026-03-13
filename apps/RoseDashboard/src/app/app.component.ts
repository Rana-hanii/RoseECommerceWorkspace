import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorService } from './shared/services/error/error.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RoseDashboard';

  hasError = false;

  constructor(private readonly errorService: ErrorService) {}
  ngOnInit(): void {
    this.errorService.error$.subscribe((res) => {
      this.hasError = res;
    });
  }
}
