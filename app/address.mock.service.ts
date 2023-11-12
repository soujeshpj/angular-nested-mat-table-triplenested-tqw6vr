import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ADDRESSES } from './address.mock';
import { USERS } from './user.mock';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressMockService {
  getAddresses(userName: string): Observable<Address[]> {
    // Simulate an API call based on the user name
    const user = USERS.find((u) => u.name === userName);
    return of(user ? user.addresses : []);
  }
}

// Import your mock user data here...
