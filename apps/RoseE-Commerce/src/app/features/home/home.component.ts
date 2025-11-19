import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/components/sectionTitle/sectionTitle.component";
import { AboutSectionComponent } from "./components/about/about-section.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutSectionComponent, SectionTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
