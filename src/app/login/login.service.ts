import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api-creation/api.service';
import { MyHttpService } from '../service/http-calling/my-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:ApiService,private httpService:MyHttpService) { }

  public login(email:string,password:string):Observable<any>{
    return this.httpService.post(this.api.createUrl('login'),{email:email,password:password})
   
  }
}
