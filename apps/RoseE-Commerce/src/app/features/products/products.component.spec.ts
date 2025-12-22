import { categoriesReducer } from './../../store/Categories/categories.reducers';
import { occasionsReducer } from './../../store/Occasions/occations.reducers';
import { productsReducer } from './../../store/products/products.reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { provideStore } from '@ngrx/store';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent,HttpClientTestingModule],
      providers:[
        provideStore({products:productsReducer , occasions:occasionsReducer , categories:categoriesReducer })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
