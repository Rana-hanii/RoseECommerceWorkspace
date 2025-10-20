import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableInputComponent } from './reusable-input.component';
import { FormControl } from '@angular/forms';

describe('ReusableInputComponent', () => {
  let component: ReusableInputComponent;
  let fixture: ComponentFixture<ReusableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableInputComponent);
    component = fixture.componentInstance;
     (component).formControl = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
