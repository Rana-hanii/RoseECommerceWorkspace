import { UpdateCategoryComponent } from './updateCategory.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('UpdateCategoryComponent', () => {
  let component: UpdateCategoryComponent;
  let fixture: ComponentFixture<UpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
