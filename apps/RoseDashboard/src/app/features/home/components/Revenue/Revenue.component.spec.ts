import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChart } from 'primeng/chart';
import { RevenueComponent } from './Revenue.component';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueComponent, HttpClientTestingModule],
    }).compileComponents();

    TestBed.overrideComponent(RevenueComponent, {
      set: {
        providers: [
          {
            provide: UIChart,
            useValue: {
              initChart: jest.fn(),
              ngAfterViewInit: jest.fn(),
              chart: null,
              type: 'line',
              data: {},
              options: {},
            },
          },
        ],
      },
    });

    fixture = TestBed.createComponent(RevenueComponent);
    component = fixture.componentInstance;

    jest.spyOn(component, 'initChart')?.mockImplementation(() => undefined);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
