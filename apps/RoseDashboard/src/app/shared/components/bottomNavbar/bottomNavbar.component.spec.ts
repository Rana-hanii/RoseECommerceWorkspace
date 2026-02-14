import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomNavbarComponent } from './bottomNavbar.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNavbarComponent],
        providers:[
              provideRouter([]),
              provideAnimations()
            ]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
