import { HomeService } from './../home/services/home.service';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableInputComponent } from '../../shared/components/reusableInput/reusableInput.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UpdateProfileService } from './services/update-profile.service';
import { UpdateProfileRes } from './interfaces/update-profile-res';
import { ToastrService } from 'ngx-toastr';
import { UpdatePhotoRes } from './interfaces/update-photo-res';
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { UserDataRes } from 'libs/src/lib/auth/interfaces/user-data/user-data-RES';
import { Subscription } from 'rxjs';
import { PASSWORD_PATTERN } from '../../shared/constants/regex.constants';
import { ChangePasswordRes } from './interfaces/change-password-res';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    ReusableInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DrawerModule,
    ButtonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  private readonly updateProfileService = inject(UpdateProfileService);
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastrService = inject(ToastrService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  private readonly homeService = inject(HomeService);

  isActive: 'account' | 'password' = 'account';

  userPhoto!: string;
  selectedFile!: File;
  visible = false;
  sub!: Subscription;

  updateUserForm: FormGroup = this.formBuilder.group({
    firstName: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    lastName: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: [null, [Validators.email, Validators.required]],
    phone: [null, [Validators.required]],
  });

  changePasswordForm: FormGroup = this.formBuilder.group(
    {
      password: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      newPassword: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
    }
    // { validators: UpdatePasswordValidator,}
  );

  ngOnInit(): void {
    this.getUserData();
  }

  editProfile(): void {
    if (this.updateUserForm.invalid) {
      this.toastrService.error(`you have to fill all inputs`);
    } else if (this.updateUserForm.valid) {
      const payload = {
        ...this.updateUserForm.value,
        phone: this.updateUserForm.get('phone')?.value?.e164Number || '',
      };

      this.updateProfileService.editProfile(payload).subscribe({
        next: (res: UpdateProfileRes) => {
          this.toastrService.success(
            'your profile has been updated',
            res.message
          );
          this.getUserData();
          if (this.selectedFile) {
            this.changeUserPhoto();
          }
        },
        error: (err: UpdateProfileRes) => {
          this.toastrService.error('Error', err.message);
          console.log(err);
        },
      });
    }
  }

  // get User Data to preview his photo
  getUserData(): void {
    this.sub = this.authService.getData().subscribe({
      next: (res: UserDataRes) => {
        this.userPhoto = res.user.photo;
      },
    });
  }

  // select file from user`s local device
  onSelectFile(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.toastrService.success('your photo has updated');
    }
  }

  changeUserPhoto(): void {
    this.sub = this.updateProfileService
      .changeUserPhoto(this.selectedFile)
      .subscribe({
        next: (res: UpdatePhotoRes) => {
          setTimeout(() => {
            this.toastrService.success('Your Photo has been changed');
          }, 400);
          this.getUserData();
        },
        error: (err: UpdatePhotoRes) => {
          this.toastrService.error(err.message);
        },
      });
  }

  changePassword(): void {
    if (this.changePasswordForm.valid) {
      this.sub = this.updateProfileService
        .changePassword(this.changePasswordForm.value)
        .subscribe({
          next: (res: ChangePasswordRes) => {
            this.cookieService.delete('roseToken');
            this.toastrService.success(
              'your password has been changed',
              res.message
            );
            this.cookieService.set('roseToken', res.token);
            this.homeService.isLogged.set(false);
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
              this.toastrService.show('log again with your new password');
            }, 2500);
          },
          error: (err: ChangePasswordRes) => {
            this.toastrService.error('error', err.message);
          },
        });
    } else {
      this.toastrService.error(`you must fill the input`);
    }
  }

  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
