import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Address } from './address.model';
import { Comment } from './comment.model';
import { USERS } from './user.mock';

// Import your mock user data here...
// Import your mock address data here...

@Injectable({
  providedIn: 'root',
})
export class CommentMockService {
  getComments(street: string): Observable<Comment[]> {
    // Simulate an API call based on the street
    const address = findAddressByStreet(street);
    return of(address ? address.comments : []);
  }
}

function findAddressByStreet(street: string): Address | undefined {
  for (const user of USERS) {
    const address = user.addresses.find((a) => a.street === street);
    if (address) {
      return address;
    }
  }
  return undefined;
}
