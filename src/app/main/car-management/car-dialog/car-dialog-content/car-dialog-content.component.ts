import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  availableFuelTypes,
  availableSegments,
  availableTransmissions,
  availableTypeOfDrive
} from "../../../../model/Car";

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
  fuelTypes = availableFuelTypes;
  segments = availableSegments;
  transmissions = availableTransmissions;
  typeOfDrives = availableTypeOfDrive;
}
