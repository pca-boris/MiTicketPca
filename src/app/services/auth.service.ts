import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any) {
    return new Promise((resolve, reject) => {
      if(credential.email == 'bonett.boris@gmail.com' && credential.password == '123456') {
        resolve('auth success');
      } else {
        reject('auth failed');
      }
    })
  }

  registerUser(credential: any) {
    return new Promise((resolve, reject) => {
      if(credential.name && credential.last_name && credential.email && credential.password) {
        resolve('register success');
      } else {
        reject('register failed');
      }
    })
    
  }
}
