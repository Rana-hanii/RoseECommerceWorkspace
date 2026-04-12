import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderStatusComponent } from './order-Status.component';
import { PLATFORM_ID } from '@angular/core';

describe('OrderStatusComponent', () => {
  let component: OrderStatusComponent;
  let fixture: ComponentFixture<OrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatusComponent, HttpClientTestingModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
