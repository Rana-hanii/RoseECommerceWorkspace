import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthHeaderFooterComponent } from './AuthHeaderFooter.component';

describe('AuthHeaderFooterComponent', () => {
  let component: AuthHeaderFooterComponent;
  let fixture: ComponentFixture<AuthHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthHeaderFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
