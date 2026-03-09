import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OccasionsTableComponent } from './occasionsTable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('OccasionsTableComponent', () => {
  let component: OccasionsTableComponent;
  let fixture: ComponentFixture<OccasionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccasionsTableComponent,HttpClientTestingModule],
       providers:[provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(OccasionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
