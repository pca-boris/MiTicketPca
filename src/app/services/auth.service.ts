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

  registerUser() {
    
  }
}
