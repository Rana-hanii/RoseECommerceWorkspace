import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestSellingComponent } from './bestSelling.component';

describe('BestSellingComponent', () => {
  let component: BestSellingComponent;
  let fixture: ComponentFixture<BestSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingComponent,HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
