import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggingIn = false;
  constructor() { }
  
  isAuthenticated() {
    return this.isLoggingIn;
  }

  setLoginTrue(){
    this.isLoggingIn=true;
  }
  setLoginFalse(){
    this.isLoggingIn=false;
  }
}
