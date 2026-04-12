import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay,} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient,withFetch,withInterceptors,} from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
    provideRouter(appRoutes),
    provideHttpClient(withFetch())
  ],
};
