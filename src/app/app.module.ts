import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleAlertService } from './service/alert-handling/simple-alert.service';
import { AesEncryptionService } from './service/encryption/aes-encryption.service';
import { TokenService } from './service/localstorage-storing/token.service';
import { MyHttpService } from './service/http-calling/my-http.service';
import { ApiService } from './service/api-creation/api.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
   HttpClientModule,
    LayoutModule,
    NgxShimmerLoadingModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    SimpleAlertService,
    AesEncryptionService,
    TokenService,
    MyHttpService,
    ApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
