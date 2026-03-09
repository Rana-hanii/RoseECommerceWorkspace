import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SectionTableComponent } from "apps/RoseDashboard/src/app/shared/components/sectionTable/sectionTable.component";
import { map, Observable } from 'rxjs';
import { OccasionsServiceService } from '../../services/occasionsService/occasions-service.service';
import { Occasion, OccasionsRes } from '../../interfaces/occasionsRes/occasions-res';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-occasions-table',
  imports: [CommonModule, SectionTableComponent, RouterModule ,AsyncPipe],
  templateUrl: './occasionsTable.component.html',
  styleUrl: './occasionsTable.component.scss',
})
export class OccasionsTableComponent implements OnInit {

  private readonly occasionsService=inject(OccasionsServiceService)

  
  occasions$!:Observable<Occasion[]>
  
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
     this.occasions$ =  this.occasionsService.getAllOcassions().pipe(
        map((res:OccasionsRes)=> res.occasions)
      )
      
    } 



   


}
