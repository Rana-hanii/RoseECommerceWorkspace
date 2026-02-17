import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LowStockComponent } from './lowStock.component';

describe('LowStockComponent', () => {
  let component: LowStockComponent;
  let fixture: ComponentFixture<LowStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowStockComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LowStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
