import { inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private readonly router=inject(Router)

    activeButton=signal<'overview' | 'categories' | 'occasions' | 'products' | 'account'>('overview')

    constructor(){
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(()=>{
        const url =this.router.url
        if (url.includes('overview')) {
          this.activeButton.set('overview')

        }else if (url.includes('categories')) {
          this.activeButton.set('categories')

        }else if (url.includes('occasions')) {
          this.activeButton.set('occasions')

        }else if (url.includes('products')) {
          this.activeButton.set('products')
          
        }else if (url.includes('account')) {
          this.activeButton.set('account')
        }


      })

    }


}
