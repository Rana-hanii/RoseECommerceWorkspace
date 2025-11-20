import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainTitleComponent } from "../shared/main-title/main-title.component";
import { SectionTitleComponent } from "../../../../shared/components/sectionTitle/sectionTitle.component";


@Component({
  selector: 'app-gallary-section',
  imports: [CommonModule, MainTitleComponent, SectionTitleComponent,NgOptimizedImage],
  templateUrl: './gallary-section.component.html',
  styleUrl: './gallary-section.component.scss',
})
export class GallarySectionComponent {

}
