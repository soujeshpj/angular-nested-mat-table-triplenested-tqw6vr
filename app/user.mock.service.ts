import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  getUsers(): Observable<User[]> {
    // Simulate an API call
    return of([...USERS]);
  }
}

const USERS: User[] = [
  // Your mock user data here...
];
