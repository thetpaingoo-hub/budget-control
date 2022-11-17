import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../localstorage-storing/token.service';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

 
  constructor(private http:HttpClient,private tokenService:TokenService) { }
 
  public get(url:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenService.getToken()}`
      })
    };
    return this.http.get(url,httpOptions);
  }

  public post (url: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenService.getToken()}`
      })
    };
    return this.http.post(url, data, httpOptions);
  } 

  public put (url: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenService.getToken()}`
      })
    };
    return this.http.put(url, data, httpOptions);
  } 

  public delete(url:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.tokenService.getToken()}`
      })
    };
    return this.http.delete(url,httpOptions);
  }

}
