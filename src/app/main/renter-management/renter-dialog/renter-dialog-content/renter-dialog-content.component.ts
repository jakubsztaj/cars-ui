import { Component, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-renter-dialog-content',
  templateUrl: './renter-dialog-content.component.html',
  styleUrls: ['./renter-dialog-content.component.css']
})
@Injectable({providedIn: 'root'})
export class RenterDialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<RenterDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveRenter(): void {
    this.dialogRef.close(this.data);
  }
}
