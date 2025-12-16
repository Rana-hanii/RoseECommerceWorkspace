import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OccasionsFilterComponent } from './occasions-filter.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing'; 

describe('OccasionsFilterComponent', () => {
  let component: OccasionsFilterComponent;
  let fixture: ComponentFixture<OccasionsFilterComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccasionsFilterComponent],
      providers: [
        provideMockStore({ 
          initialState: {occasions: { allOccasions: [] }}})
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(OccasionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
