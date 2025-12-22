import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceFilterComponent } from './price-filter.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PriceFilterComponent', () => {
  let component: PriceFilterComponent;
  let fixture: ComponentFixture<PriceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceFilterComponent],
      providers:[
        provideMockStore({initialState: {products:{filter:{lowPrice:null , highPrice:null} }}})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
