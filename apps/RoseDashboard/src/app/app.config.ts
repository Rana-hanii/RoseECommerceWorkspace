import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { headerInterceptor } from './core/interceptor/header.interceptor';
import { provideToastr } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideToastr(),
    MessageService,
    provideHttpClient(withFetch(), withInterceptors([headerInterceptor])),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
  ],
};
