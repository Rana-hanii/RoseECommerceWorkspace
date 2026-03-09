import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTableComponent } from './sectionTable.component';
import { provideRouter } from '@angular/router';

describe('SectionTableComponent', () => {
  let component: SectionTableComponent;
  let fixture: ComponentFixture<SectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTableComponent],
       providers:[provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
