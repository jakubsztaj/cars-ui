import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-car-dialog-content',
  templateUrl: './car-dialog-content.component.html',
  styleUrls: ['./car-dialog-content.component.css']
})
export class CarDialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<CarDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCar(): void {
    this.dialogRef.close(this.data);
  }
}
