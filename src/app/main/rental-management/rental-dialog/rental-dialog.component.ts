import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RentalService } from "../../../service/rental.service";
import { RentalDialogContentComponent } from "./rental-dialog-content/rental-dialog-content.component";
import { RenterService } from "../../../service/renter.service";
import { CarService } from "../../../service/car.service";

@Component({
  selector: 'app-rental-dialog',
  templateUrl: './rental-dialog.component.html',
  styleUrls: ['./rental-dialog.component.css']
})
export class RentalDialogComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, public renterService: RenterService, public carService: CarService, public rentalService: RentalService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RentalDialogContentComponent, {
      width: '250px',
      data: {
        cars: this.carService.loadCars(),
        renters: this.renterService.loadRenters()
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }
}
