import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleAlertService } from 'src/app/service/alert-handling/simple-alert.service';
import { AesEncryptionService } from 'src/app/service/encryption/aes-encryption.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  id:number=0;
  sheetList:any=[
    {id:1,name:"User 1",email:"user1@gmail.com",status:true,phone:33432},
    {id:2,name:"User 2",email:"user2@gmail.com",status:false,phone:33432},
    {id:3,name:"User 3",email:"user3@gmail.com",status:true,phone:33432},
  ]
  page:number=0;
  totalCount:number=120;
  pageSize:number=10;
  isLoading=false;
  constructor(private router:Router,
    private simpleAlertService:SimpleAlertService,
    private aes:AesEncryptionService) { }

  ngOnInit(): void {
   
  }

  goDetail(){
    //this.simpleAlertService.success("Successfully Saved");
    this.router.navigate(['/user/'+this.id]);
    //console.log(this.aes.encrypt("hello"));
    
  }

  pageChanged(e:number){
    this.page=e;
  }
}
