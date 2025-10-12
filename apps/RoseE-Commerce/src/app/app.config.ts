import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { NgxSpinnerModule } from "ngx-spinner";
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideToastr(),
    provideAnimations(),

    importProvidersFrom(NgxSpinnerModule),

     provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })


  ],
};
