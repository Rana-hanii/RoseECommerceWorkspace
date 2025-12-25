import { Injectable, signal } from '@angular/core';
import {setCookie , getCookie} from"./../../utilities/cookie.utils"


export type ThemeMode = 'light' | 'dark' | 'system';
@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
   private readonly cookieKey = 'system';    
    theme = signal<ThemeMode>('system');
    private mediaQuery: MediaQueryList | null = null;

 init() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
      }

      if (!this.mediaQuery) {
        this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      }

    if (typeof document === 'undefined') return;

    const stored = getCookie(this.cookieKey) as ThemeMode;
    if (stored) this.theme.set(stored);

    this.applyTheme(this.theme());

    this.mediaQuery?.addEventListener('change', e => {
      if (this.theme() === 'system') this.applyTheme('system');
    });
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    if (typeof document !== 'undefined') setCookie(this.cookieKey, mode);
    this.applyTheme(mode);
  }

  applyTheme(mode: ThemeMode) {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;
    html.classList.remove('dark');

    if (mode === 'dark') html.classList.add('dark');
    else if (mode === 'system' && this.mediaQuery?.matches) html.classList.add('dark');
  }

  syncSystemTheme() {
    if (this.theme() === 'system') this.applyTheme('system');
  }

  watchSystemThemeChanges(callback: (isDark: boolean) => void) {
    this.mediaQuery?.addEventListener('change', e => {
      if (this.theme() === 'system') {
        callback(e.matches);
        this.applyTheme('system');
      }
    });
  }


}
