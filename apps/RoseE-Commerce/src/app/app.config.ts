import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { API_URL } from '@rose-ecommerce-workspace/auth';
import { CookieService } from 'ngx-cookie-service';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { provideStore } from '@ngrx/store';
import { productsReducer } from './store/products/products.reducers';
import { provideEffects } from '@ngrx/effects';
import { productsEffects } from './store/products/products.effects';
import { categoriesReducer } from './store/Categories/categories.reducers';
import { categotiesEffect } from './store/Categories/categories.effects';
import { occasionsReducer } from './store/Occasions/occations.reducers';
import { occasionsEffect } from './store/Occasions/occasions.effects';
import { wishlistReducer } from './store/wishList/wishlist.reducers';
import { wishlistEffects } from './store/wishList/wishlist.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withFetch() ,withInterceptors([headersInterceptor])),
    importProvidersFrom(
      NgxSpinnerModule,
      BrowserAnimationsModule,
      CookieService
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    { provide: API_URL, useValue: 'https://flower.elevateegy.com/api/v1' },

    

    provideStore({
      products:productsReducer,
      categories:categoriesReducer,
      occasions:occasionsReducer,
      wishlist:wishlistReducer
    }),


    provideEffects(
      [productsEffects , categotiesEffect , occasionsEffect ,wishlistEffects]
    ),

  ], 
};
