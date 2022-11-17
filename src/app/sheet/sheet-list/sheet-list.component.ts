import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewSheetComponent } from '../new-sheet/new-sheet.component';

@Component({
  selector: 'app-sheet-list',
  templateUrl: './sheet-list.component.html',
  styleUrls: ['./sheet-list.component.sass']
})
export class SheetListComponent implements OnInit {
  sheetList=[
    {id:1,name:"Sheet 1",income:12334,expenses:445,balance:33432},
    {id:2,name:"Sheet 2",income:12334,expenses:445,balance:33432},
    {id:3,name:"Sheet 3",income:12334,expenses:445,balance:33432},
  ]
  isLoading=false;
  constructor(private router:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openNewDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.position = {
      'top': '20px',
      
    };
    dialogConfig.minWidth='300px';
    this.dialog.open(NewSheetComponent,dialogConfig)
  }

  goDetail(){
    this.router.navigate(['/sheet/new'])
  }

}
