import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheetRoutingModule } from './sheet-routing.module';
import { SheetListComponent } from './sheet-list/sheet-list.component';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { SheetApiService } from './sheet-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SheetListComponent,
    SheetDetailComponent,
    NewSheetComponent
  ],
  imports: [
    CommonModule,
    SheetRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [SheetApiService]
})
export class SheetModule { }
