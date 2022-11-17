import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    LayoutModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
