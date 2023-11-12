import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { Address } from './address.model';
import { Comment } from './comment.model';
import { Validation } from './validation.model';
import { USERS } from './user.model';

@Injectable({
  providedIn: 'root',
})

export class MockService {
  getUsers(): Observable<User[]> {
    return of(USERS.map(user => ({ ...user, addresses: undefined })));
  }

  getAddresses(username: string): Observable<Address[]> {
    const user = USERS.find(u => u.name === username);

    if (user && user.addresses) {
      return of(user.addresses.map(addr => ({ ...addr, comments: undefined })));
    } else {
      return of([]);
    }
  }

  getComments(street: string): Observable<Comment[]> {
    const comments: Comment[] = [];

    USERS.forEach(user => {
      user.addresses?.forEach(address => {
        if (address.street === street) {
          comments.push(...(address.comments || []));
        }
      });
    });

    return of(comments.map(comment => ({ ...comment, validations: undefined })));
  }

  getValidations(commentID: number): Observable<Validation[]> {
    const validations: Validation[] = [];

    USERS.forEach(user => {
      user.addresses?.forEach(address => {
        address.comments?.forEach(comment => {
          if (comment.commentID === commentID) {
            validations.push(...(comment.validations || []));
          }
        });
      });
    });

    return of(validations);
  }
}
