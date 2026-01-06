import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-Card.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';


describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers:[
         {provide:ActivatedRoute , useValue:{params: of({ id: '1' }),snapshot: { paramMap: { get: () => '1' } }}},
         provideMockStore({
            initialState:{
              wishlist:{
                wishlistedProducts:[] ,
                wishlistedProductIds:[],
                productId:null,
                data:null,
                isLoading:false,
                error:null
              }}})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
