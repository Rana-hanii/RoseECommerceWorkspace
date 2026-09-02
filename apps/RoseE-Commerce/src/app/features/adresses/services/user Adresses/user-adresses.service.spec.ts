import { TestBed } from '@angular/core/testing';

import { UserAdressesService } from './user-adresses.service';

describe('UserAdressesService', () => {
  let service: UserAdressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAdressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
