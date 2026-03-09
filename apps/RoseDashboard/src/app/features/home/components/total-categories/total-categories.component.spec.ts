import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalCategoriesComponent } from './total-categories.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
describe('TotalCategoriesComponent', () => {
  let component: TotalCategoriesComponent;
  let fixture: ComponentFixture<TotalCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCategoriesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
