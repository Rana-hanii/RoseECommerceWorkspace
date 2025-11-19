import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialGiftsItemsComponent } from './SpecialGiftsItems.component';

describe('SpecialGiftsItemsComponent', () => {
  let component: SpecialGiftsItemsComponent;
  let fixture: ComponentFixture<SpecialGiftsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
