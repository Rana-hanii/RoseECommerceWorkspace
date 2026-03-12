import { NgxSpinnerModule } from 'ngx-spinner';
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
import { MessageService } from 'primeng/api';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './core/interceptor/error.interceptor';
import { loadingInterceptor } from './core/interceptor/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        headerInterceptor,
        errorInterceptor,
        loadingInterceptor,
      ])
    ),
    provideRouter(appRoutes),
    provideToastr(),
    NgxSpinnerModule,
    MessageService,
    provideHttpClient(withFetch()),
  ],
};
