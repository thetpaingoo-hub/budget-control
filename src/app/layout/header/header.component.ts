import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
declare var jQuery:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  menus:any=[
    {id:0,name:"User",link:"/user",active:false,icon:"fa fa-user"},
    {id:0,name:"Sheet",link:"/sheet",active:false,icon:"fa fa-file"},
    {id:0,name:"Dashboard",link:"/dashboard",active:false,icon:"fa fa-dashboard"},
    {id:0,name:"User",link:"/user",active:false,icon:"fa fa-user"},
    {id:0,name:"Sheet",link:"/sheet",active:false,icon:"fa fa-file"},
    {id:0,name:"Dashboard",link:"/dashboard",active:false,icon:"fa fa-dashboard"},
    {id:0,name:"User",link:"/user",active:false,icon:"fa fa-user"},
    {id:0,name:"Sheet",link:"/sheet",active:false,icon:"fa fa-file"},
    {id:0,name:"Dashboard",link:"/dashboard",active:false,icon:"fa fa-dashboard"},
    {id:0,name:"User",link:"/user",active:false,icon:"fa fa-user"},
    {id:0,name:"Sheet",link:"/sheet",active:false,icon:"fa fa-file"},
    {id:0,name:"Dashboard",link:"/dashboard",active:false,icon:"fa fa-dashboard"},
    {id:0,name:"User",link:"/user",active:false,icon:"fa fa-user"},
    {id:0,name:"Sheet",link:"/sheet",active:false,icon:"fa fa-file"},
    {id:0,name:"Dashboard",link:"/dashboard",active:false,icon:"fa fa-dashboard"},
  ]
  isLogin=false;
  constructor(private router:Router,
    private auth:AuthService) { 
      this.isLogin=auth.isAuthenticated();
    }

  ngOnInit(): void {
  }

  async menuClick(data:any){
    this.router.navigate([data.link])
    await this. changeActiveDefault();
    data.active=true;
    this.closeNav();
  }

  changeActiveDefault(){
    for(let menu of this.menus){
      menu.active=false;
    }
  }

  openNav(){
    const customNav=document.getElementById('custom-nav');
    customNav!.classList.add("nav-show");
    //customNav!.className="custom-sidenav custom-sidenav-start "
  }

  closeNav(){
    const customNav=document.getElementById('custom-nav');
    customNav!.classList.remove("nav-show");
    //customNav!.className="custom-sidenav custom-sidenav-start"
  }

}
