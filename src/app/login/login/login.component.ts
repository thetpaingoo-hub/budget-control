import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SimpleAlertService } from 'src/app/service/alert-handling/simple-alert.service';
import { AesEncryptionService } from 'src/app/service/encryption/aes-encryption.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(private router:Router
    ,private loginService:LoginService
    ,private aes:AesEncryptionService
    ,private simpleAlert:SimpleAlertService
    ,private auth:AuthService) { 
      this.loginForm=new FormGroup({
        femail:new FormControl('',Validators.required),
        fpassword:new FormControl('',Validators.required)
      })
    }

  ngOnInit(): void {

  }
  login(){
    
    if(this.loginForm.status=='VALID'){
      console.log(this.loginForm);
      this.loginService.login(this.aes.encrypt(this.loginForm.value.femail),this.aes.encrypt(this.loginForm.value.fpassword)).subscribe(data=>{
        if(data){
          this.auth.setLoginTrue();
          this.router.navigate(['/dashboard'])
        }else{
          this.simpleAlert.danger("Login Fail")
        }
      })
    }else{
      this.simpleAlert.warning("Please add Email or Password")
    }
 
  }

}
