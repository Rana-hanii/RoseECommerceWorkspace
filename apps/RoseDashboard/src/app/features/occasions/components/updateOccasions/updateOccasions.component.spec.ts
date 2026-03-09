import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateOccasionsComponent } from './updateOccasions.component';

describe('UpdateOccasionsComponent', () => {
  let component: UpdateOccasionsComponent;
  let fixture: ComponentFixture<UpdateOccasionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOccasionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateOccasionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
