import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.sass']
})
export class NewSheetComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewSheetComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  save(){
    
  }

}
