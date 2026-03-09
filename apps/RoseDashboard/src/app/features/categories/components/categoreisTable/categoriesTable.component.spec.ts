import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesTableComponent } from './categoriesTable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('CategoriesTableComponent', () => {
  let component: CategoriesTableComponent;
  let fixture: ComponentFixture<CategoriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTableComponent , HttpClientTestingModule],
       providers:[provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
