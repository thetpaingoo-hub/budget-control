import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimpleAlertService } from './service/alert-handling/simple-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'budget-control';
  subscription: Subscription;
  constructor(private alertService: SimpleAlertService) {
    this.subscription = this.alertService.alert().subscribe(data => {
    
    document.getElementById('noti-bar')!.innerHTML = data.message;
    const snackbar=document.getElementById('noti-bar');
    snackbar!.className = 'show ' + data.type;
    setTimeout(function () { snackbar!.className = snackbar!.className.replace('show', 'fadeOut'); }, 3000);
  })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
