import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorState = new BehaviorSubject(false);

  error$ = this.errorState.asObservable();

  showError() {
    this.errorState.next(true);
  }
}
