import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortFilterComponent } from './sort-filter.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('SortFilterComponent', () => {
  let component: SortFilterComponent;
  let fixture: ComponentFixture<SortFilterComponent>;
 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortFilterComponent],
      providers: [
             provideMockStore({ 
               initialState: {products: { filter:{}}}})
           ]
    }).compileComponents();

    fixture = TestBed.createComponent(SortFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
