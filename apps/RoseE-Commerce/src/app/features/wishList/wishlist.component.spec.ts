import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistComponent } from './wishlist.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistComponent ,HttpClientTestingModule],
      providers:[
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

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
