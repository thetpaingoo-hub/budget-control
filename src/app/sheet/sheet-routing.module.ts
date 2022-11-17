import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';
import { SheetListComponent } from './sheet-list/sheet-list.component';

const routes: Routes = [
  {
    path:'',
    component:SheetListComponent,
    canActivate:[AuthGuard]
  },
  {
    path:':id',
    component:SheetDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'new',
    component:SheetDetailComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheetRoutingModule { }
