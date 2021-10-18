import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

sendCredentials(email: string, password: string): void {
  const body = {
    email,
    password
  }
  //return body//this.http.post(`${this.URL}/auth/login`, body)
}

suma(a: number, b: number): number {
  return a + b
}
}