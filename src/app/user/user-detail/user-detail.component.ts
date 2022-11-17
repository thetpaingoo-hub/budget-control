import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {
  user={
  id:0,
  name:"",
  phone:"",
  password:"",
  gender:"",
  email:"",
  address:"",
  roleList:[],
}
  userFormGroup:any
  isSaveLoading=false;
  isSavebtnDisabled=false;
  constructor(private fb: FormBuilder) {
    // this.userFormGroup=this.fb.group({
    //   name: ['',Validators.required],
    //   phone: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    // })
    this.userFormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      gender: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }
  SaveUser(){
    this.isSavebtnDisabled=true;
    this.isSaveLoading=true;
    console.log(this.user);
    
  }
  onSubmit(){
    if(this.userFormGroup.status=='VALID'){
      console.log(this.userFormGroup.value);
    }else{
      console.warn('Invalid form');
    }
  
  }

}
