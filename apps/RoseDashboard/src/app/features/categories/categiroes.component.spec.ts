import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategiroesComponent } from './categiroes.component';

describe('CategiroesComponent', () => {
  let component: CategiroesComponent;
  let fixture: ComponentFixture<CategiroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategiroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategiroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
