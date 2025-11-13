import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitsUIComponent } from './benefitsUI.component';

describe('BenefitsUIComponent', () => {
  let component: BenefitsUIComponent;
  let fixture: ComponentFixture<BenefitsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsUIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
