import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTableComponent } from "apps/RoseDashboard/src/app/shared/components/sectionTable/sectionTable.component";
import { map, Observable } from 'rxjs';
import { CategoriesRes, Category } from '../../interfaces/categories-res';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-table',
  imports: [CommonModule, SectionTableComponent],
  templateUrl: './categoriesTable.component.html',
  styleUrl: './categoriesTable.component.scss',
})
export class CategoriesTableComponent {
    private readonly categoriesService=inject(CategoriesService)

       categories$!:Observable<Category[]>
    
      columns = [
        { field: 'name', header: 'Name' },
        { field: 'productsCount', header: 'Products' },
    
      ];
    
      filterFields = ['name', 'productsCount' ];
      addRoute=input<string>('')
    
      onRowSelect(row: any) {
        console.log('Selected Row:', row);
      } 
    
    
    
      ngOnInit(): void {
          this.getProductList()
      }
    
      getProductList():void{
       this.categories$ =  this.categoriesService.getAllCategories().pipe(
          map((res:CategoriesRes)=> res.categories)
        )
        
      } 
  
}
