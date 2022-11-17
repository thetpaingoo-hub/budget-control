import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
const key = CryptoJS.SHA256('dR$&$veFplpEYLpi');
const iv = CryptoJS.MD5('xk!P$@@#NSGxp8&a');

@Injectable({
  providedIn: 'root'
})
export class AesEncryptionService {

  // private readonly KEY="123456";
   constructor() { }

  // public encrypt(value:any):string{
  //   return CryptoJS.AES.encrypt(value,this.KEY).toString(); 
  // }

  // public decrypt(value:any):string{
  //   return CryptoJS.AES.decrypt(value,this.KEY).toString(CryptoJS.enc.Utf8); 
  // }
  encrypt(value:string){
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();//.replace("+","%2B");
  }

  //The get method is use for decrypt the value.
  decrypt(value:string){
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

}
