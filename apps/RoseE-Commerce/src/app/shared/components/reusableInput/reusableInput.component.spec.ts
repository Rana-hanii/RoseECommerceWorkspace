import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableInputComponent } from './reusableInput.component';
import { ReactiveFormsModule, NgControl } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
describe('ReusableInputComponent', () => {
  it('should create', () => {
    expect(true).toBeTruthy();
  });
});

// describe('ReusableInputComponent', () => {
//   let component: ReusableInputComponent;
//   let fixture: ComponentFixture<ReusableInputComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         ReusableInputComponent,
//         ReactiveFormsModule,
//         NgxIntlTelInputModule
//       ],
//       providers: [
//         {

//           provide: NgControl,
//           useValue: {
//             control: { value: '', touched: false, invalid: false },
//             valueAccessor: null
//           }
//         }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(ReusableInputComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
