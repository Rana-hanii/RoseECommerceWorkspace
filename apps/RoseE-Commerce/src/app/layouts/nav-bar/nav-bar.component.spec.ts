import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { API_URL } from '@rose-ecommerce-workspace/auth';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent ,HttpClientTestingModule],
       providers: [
        { provide: API_URL, useValue: 'https://flower.elevateegy.com/api/v1'},
        provideMockStore({ initialState: {} }),
        {
        provide: ActivatedRoute,
         useValue: {
          snapshot: {},
          params: {},
          queryParams: {},
          data: {},
          outlet: 'primary'
        }
      }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
