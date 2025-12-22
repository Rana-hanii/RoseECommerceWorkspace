import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingsFilterComponent } from './ratings-filter.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('RatingsFilterComponent', () => {
  let component: RatingsFilterComponent;
  let fixture: ComponentFixture<RatingsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingsFilterComponent],
      providers:[
        provideMockStore({initialState:{ products:{ filter:{minRating:0}}}})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
