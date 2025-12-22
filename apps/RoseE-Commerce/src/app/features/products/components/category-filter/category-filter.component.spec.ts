import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFilterComponent } from './category-filter.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('CategoryFilterComponent', () => {
  let component: CategoryFilterComponent;
  let fixture: ComponentFixture<CategoryFilterComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFilterComponent],
       providers: [
        provideMockStore({ 
          initialState: {
            categories: { allCategories: [] } 
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
