
import { Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button.component";
import { UserAdressesService } from './services/user Adresses/user-adresses.service';
import { Observable } from 'rxjs';
import { Address} from './interfaces/adress-res';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationPickerComponent } from "./components/locationPicker/locationPicker.component";


@Component({
  selector: 'app-adresses',
  imports: [CommonModule, CustomButtonComponent, ReactiveFormsModule, LocationPickerComponent],
  templateUrl: './adresses.component.html',
  styleUrl: './adresses.component.scss',
})
export class AdressesComponent{ 

  private fb = inject(FormBuilder);

  private  readonly Adresses=inject(UserAdressesService)

  userAdresses = input.required<Observable<Address[]>>();

  // outputs
  updateAdress = output<string>();
  removeAdress = output<string>();
  selectAddress = output<Address>();
  addAddress = output<Address>();
  addressOperationComplete = output<void>();
  step:number=1
  mode: 'add' | 'edit' = 'add';
  // state
  currentStep = signal<number>(1);
  selectedAddressId = signal<string | null>(null);

  // FORM
  AddressForm: FormGroup = this.fb.group({
    city: ['', Validators.required],
    street: ['', Validators.required],
    phone: ['', Validators.required],
    username: ['', Validators.required],
    lat: ['asda'],
    long: ['asdafaw'],
  });

  // SELECT EXISTING ADDRESS
  onSelect(item: Address): void {
    this.selectedAddressId.set(item._id);
    this.selectAddress.emit(item);
  }

  // REMOVE
  onRemove(id: string): void {
    this.Adresses.removeAdress(id).subscribe({
      next: (res) => {
        console.log('Address Removed', res);
        this.addressOperationComplete.emit();
      },
      error: (err) => console.error(err)
    });
  }

  // UPDATE FLOW
  onUpdate(item: Address): void {
    this.mode = 'edit';
    this.selectedAddressId.set(item._id);

    this.AddressForm.patchValue({
    city: item.city,
    street: item.street,
    phone: item.phone,
    lat: item.lat,
    long: item.long,
    username:item.username
  });

    this.updateAdress.emit(item._id);
    this.step=2
  }

  onAddNewAddress(): void {

  this.mode = 'add';

  this.selectedAddressId.set(null);

  

  this.step = 2;
}

  // NEXT STEP
  nextBtn(): void {
    this.currentStep.set(2);
  }

  backBtn(): void {
    this.currentStep.set(1);
  }

  // ADD NEW ADDRESS
  onConfirmAdress(): void {

  if (this.AddressForm.invalid) {
    this.AddressForm.markAllAsTouched();
    return;
  }

  const data = this.AddressForm.getRawValue();

  if (this.mode === 'add') {

    this.Adresses.addAdress(data).subscribe({
      next: (res) => {
        console.log('Address Added', res);

        this.step = 1;
        this.AddressForm.reset();
        this.addressOperationComplete.emit();
      },
      error: (err) => console.error(err)
    });

  } else {

    const id = this.selectedAddressId();

    if (!id) return;

    this.Adresses.updateAdress(id, data).subscribe({
      next: (res) => {
        console.log('Address Updated', res);

        this.step = 1;
        this.addressOperationComplete.emit();
      },
      error: (err) => console.error(err)
    });
  }
}
  

  // progress bar
  get progressWidth(): string {
    if (this.currentStep() === 1) return '14%';
    if (this.currentStep() === 2) return '80%';
    return '0%';
  } 

  // selecting Location
  onLocationSelected(event: {
  lat: string;
  long: string;
  address: string;
}): void {

  this.AddressForm.patchValue({
    street: event.address,
    lat: event.lat,
    long: event.long
  });
}
}



