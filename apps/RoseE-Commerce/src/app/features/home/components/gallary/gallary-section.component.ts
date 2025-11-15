import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from "../shared/main-title/main-title.component";
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";

@Component({
  selector: 'app-gallary-section',
  imports: [CommonModule, MainTitleComponent, SectionTitleComponent],
  templateUrl: './gallary-section.component.html',
  styleUrl: './gallary-section.component.scss',
})
export class GallarySectionComponent {}
