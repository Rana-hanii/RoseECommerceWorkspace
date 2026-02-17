import { Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  breadCrumbItem=signal<MenuItem[]>([])

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs: MenuItem[] = [];
        this.buildBreadcrumb(this.route.root, breadcrumbs);
        this.breadCrumbItem.set(breadcrumbs);
      });
  } 


    private buildBreadcrumb(route: ActivatedRoute, breadcrumbs: MenuItem[]) {
    const children = route.children;

    for (const child of children) {
      if (child.snapshot.data['breadcrumb']) {
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'],
          routerLink: '/' + child.snapshot.url.map(u => u.path).join('/')
        });
      }
      this.buildBreadcrumb(child, breadcrumbs);
     }
    }
}
