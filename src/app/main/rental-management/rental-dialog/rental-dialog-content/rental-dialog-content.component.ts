import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RentalService} from "../../../../service/rental.service";
import {pickUpLocation} from "../../../../model/Rental";

@Component({
  selector: 'app-rental-dialog-content',
  templateUrl: './rental-dialog-content.component.html',
  styleUrls: ['./rental-dialog-content.component.css']
})

@Injectable({providedIn: 'root'})
export class RentalDialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<RentalDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public rentalService: RentalService) {
    data.cars.subscribe((cars: any) => {
      this.cars = cars
    })
    data.renters.subscribe((renters: any) => {
      this.renters = renters
    })
    data.rentals.subscribe((rentals: any) => {
      this.rentals = rentals
    })
  }

  renters: any;
  cars: any;
  rentals: any;
  pesel = "";
  vin = "";
  price = "";
  deposit = "";
  location = "";

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveRental(): void {
    const rentalDto = {
      vin: this.vin,
      pesel: this.pesel,
      price: this.price,
      location: this.location
    }
    this.dialogRef.close(rentalDto);
  }
  locations = pickUpLocation;
}

