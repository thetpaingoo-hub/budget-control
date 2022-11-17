import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:'sheet',
    loadChildren:()=>import("./sheet/sheet.module").then(m=>m.SheetModule),
    canActivate:[AuthGuard]
  },{
    path:'user',
    loadChildren:()=>import("./user/user.module").then(m=>m.UserModule),
    canActivate:[AuthGuard]
  },
  {
    path:'**',pathMatch:'full',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
