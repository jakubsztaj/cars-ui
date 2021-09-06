import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CarService } from "../../../service/car.service";
import { CarDialogContentComponent } from "./car-dialog-content/car-dialog-content.component";

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrls: ['./car-dialog.component.css']
})
export class CarDialogComponent {
  @Output()
  newItemEvent1 = new EventEmitter<any>();

  constructor(public dialog1: MatDialog, public carService: CarService) {
  }

  openDialog1(): void {
    const dialogRef1 = this.dialog1.open(CarDialogContentComponent, {
      width: '250px',
      data: {
        type: "",
        name: "",
        manufacturingYear: "",
        segment: "",
        transmission: "",
        fuelType: "",
        typeOfDrive: ""
      }
    });
    dialogRef1.afterClosed().subscribe(formData1 => {
      this.newItemEvent1.emit(formData1);
    })
  }
}
