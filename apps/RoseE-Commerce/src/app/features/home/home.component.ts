import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { AboutSectionComponent } from "./components/about/about-section.component";
import { GallarySectionComponent } from "./components/gallary/gallary-section.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutSectionComponent, SectionTitleComponent, GallarySectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
