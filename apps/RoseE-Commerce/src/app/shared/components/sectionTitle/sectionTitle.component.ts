import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  imports: [CommonModule],
  templateUrl: './sectionTitle.component.html',
  styleUrl: './sectionTitle.component.scss',
})
export class SectionTitleComponent {

  @Input() title=''
}
