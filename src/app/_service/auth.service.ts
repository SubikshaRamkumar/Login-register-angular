import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('toekn') !== null) {
      return true;
    }
    return false;
  }
}
