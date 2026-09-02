import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AccountService } from '../../features/account/services/account.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, Menu, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _accountService = inject(AccountService);
  private readonly _toster = inject(ToastrService);
  isActive: 'overview' | 'categories' | 'occasions' | 'products' = 'overview';
  items: any[] = [];
  firstName!: string;
  lastName!: string;
  email!: string;
  ngOnInit(): void {
    this.dropdownMenu();
    this.getUserData();
  }

  getUserData() {
    this._accountService.ProfileData().subscribe({
      next: (res) => {
        this.firstName = res.user.firstName;
        this.email = res.user.email;
        this.lastName = res.user.lastName;
      },
    });
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


   navigateToRose():void{
    window.location.href=environment.roseEcommerceApp
    
  }
}
