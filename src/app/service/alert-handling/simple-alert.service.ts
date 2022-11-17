import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlertService {
  private subject=new Subject<any>();
  constructor() { }

  alert():Observable<any>{
    return this.subject.asObservable();
  }

  success(str:string){
    const x={
      'message':str,
      'type':'success'
    }
    this.subject.next(x);
  }

  warning(str:string){
    const x={
      'message':str,
      'type':'warning'
    }
     this.subject.next(x);
  }

  info(str:string){
    const x={
      'message':str,
      'type':'info'
    }
     this.subject.next(x);
  }

  danger(str:string){
    const x={
      'message':str,
      'type':'danger'
    }
     this.subject.next(x);
  }

}
