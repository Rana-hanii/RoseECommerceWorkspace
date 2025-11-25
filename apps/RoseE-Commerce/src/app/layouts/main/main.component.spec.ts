import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { API_URL } from '@rose-ecommerce-workspace/auth';
import { ActivatedRoute } from '@angular/router';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent,HttpClientTestingModule],
       providers: [
        { provide: API_URL, useValue: 'https://flower.elevateegy.com/api/v1' },
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

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
