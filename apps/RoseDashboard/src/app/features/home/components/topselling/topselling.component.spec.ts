import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopsellingComponent } from './topselling.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('TopsellingComponent', () => {
  let component: TopsellingComponent;
  let fixture: ComponentFixture<TopsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopsellingComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(TopsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
