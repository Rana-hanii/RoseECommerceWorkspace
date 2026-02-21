import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AccountService } from '../../features/account/services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    Menu,
    RouterModule,
    AsyncPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _accountService = inject(AccountService);
  private readonly _toster = inject(ToastrService);
  isActive: 'overview' | 'categories' | 'occasions' | 'products' = 'overview';
  items: any[] = [];
  user$ = this._accountService.userProfile$;
  ngOnInit(): void {
    this.dropdownMenu();
  }

  logOut() {
    this._accountService.logOut().subscribe({
      next: (res) => {
        this._toster.success('Logged out successfully');
        this._router.navigate(['login']);
      },
    });
  }

  dropdownMenu(): void {
    this.items = [
      {
        label: 'Firstname + lastName',
        items: [
          {
            label: 'Account',
            icon: 'pi pi-refresh',
            command: () => {
              this._router.navigate(['/dash/account']);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-upload',
            command: () => {
              this.logOut();
            },
          },
        ],
      },
    ];
  }
}
