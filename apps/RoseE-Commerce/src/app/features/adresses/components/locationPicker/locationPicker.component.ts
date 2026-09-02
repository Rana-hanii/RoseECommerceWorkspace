import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address } from '../../interfaces/adress-res';
import {
  GoogleMapsModule,
  MapMarker
} from '@angular/google-maps';

export interface SelectedLocation {
  lat: string;
  long: string;
  address: string;
}

@Component({
  selector: 'app-location-picker',
  imports: [CommonModule ,GoogleMapsModule , MapMarker],
  templateUrl: './locationPicker.component.html',
  styleUrl: './locationPicker.component.scss',
})
export class LocationPickerComponent {

   locationSelected = output<SelectedLocation>();

  zoom = 15;

  center = signal<google.maps.LatLngLiteral>({
    lat: 30.0444,
    lng: 31.2357
  }); 

  center2 : google.maps.LatLngLiteral = { lat: 40.73061, lng: -73.935242 };
  zoom2 = 12;
  markers = [
    { lat: 40.73061, lng: -73.935242 },
    { lat: 40.74988, lng: -73.968285 }
  ];

  markerPosition = signal<google.maps.LatLngLiteral | null>(null);


  onMapClick(event: google.maps.MapMouseEvent): void {

    if (!event.latLng) return;

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    this.markerPosition.set({ lat, lng });

    this.reverseGeocode(lat, lng);
  }

  reverseGeocode(
    lat: number,
    lng: number
  ): void {

    const geocoder =
      new google.maps.Geocoder();

    geocoder.geocode(
      {
        location: { lat, lng }
      },
      (results, status) => {

        if (
          status === 'OK' &&
          results?.length
        ) {

          this.locationSelected.emit({
            lat: lat.toString(),
            long: lng.toString(),
            address:
              results[0].formatted_address
          });
        }
      }
    );
  }

  useCurrentLocation(): void {

    navigator.geolocation.getCurrentPosition(
      (position) => {

        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.center.set(coords);
        this.markerPosition.set(coords);

        this.reverseGeocode(
          coords.lat,
          coords.lng
        );
      }
    );
  }
}
