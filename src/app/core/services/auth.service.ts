import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthService {
  login(username: string, password: string): Observable<{ token: string }> {
    const isValid = username === 'admin@test.com' && password === 'password123';

    if (!isValid) {
      return throwError(() => new Error('Invalid email or password'));
    }

    const token = 'jwt-token-123456';
    return of({ token }).pipe(delay(500));
  }
}
