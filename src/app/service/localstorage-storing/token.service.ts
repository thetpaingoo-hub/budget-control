import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 
  constructor() { }

  setToken(token: string) {
    const tokenString: string = JSON.stringify(token);
    localStorage.setItem('bc_token', tokenString);
  }

  getToken(): string | null {
    let token = localStorage.getItem('bc_token');
    if (token != null) {
      token = JSON.parse(token);
    }
    return token;
  }

  setLoginStatus(){
    
  }
}
