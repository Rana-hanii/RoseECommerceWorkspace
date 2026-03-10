import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccasionsTableComponent } from "./components/occasionsTable/occasionsTable.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { OccasionsServiceService } from './services/occasionsService/occasions-service.service';
import { Occasion, OccasionsRes } from './interfaces/occasionsRes/occasions-res';
import { SectionTableComponent } from "../../shared/components/sectionTable/sectionTable.component";

@Component({
  selector: 'app-occasions',
  imports: [CommonModule, RouterModule, OccasionsTableComponent, SectionTableComponent],
  templateUrl: './occasions.component.html',
  styleUrl: './occasions.component.scss',
})
export class OccasionsComponent {


    





}
