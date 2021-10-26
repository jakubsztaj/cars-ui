import { Component, EventEmitter, Output } from '@angular/core';
import { RentalService } from "../../service/rental.service";
import { paymentStatusUpdate, Rental } from "../../model/Rental";
import { CarDialogContentComponent } from "../car-management/car-dialog/car-dialog-content/car-dialog-content.component";
import { MatDialog } from "@angular/material/dialog";
import { CarService } from "../../service/car.service";
import { RentalPaymentDialogComponent } from "./rental-dialog/rental-payment-dialog/rental-payment-dialog.component";
import {RenterDialogPersonalDataComponent} from "../renter-management/renter-dialog/renter-dialog-personal-data/renter-dialog-personal-data.component";
import {RentalDialogDataComponent} from "./rental-dialog/rental-dialog-data/rental-dialog-data.component";

@Component({
  selector: 'app-rental-management',
  templateUrl: './rental-management.component.html',
  styleUrls: ['./rental-management.component.css']
})
export class RentalManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(rentalService: RentalService, public dialog: MatDialog) {
    this.rentalService = rentalService;
    this.loadRentals();
  }


  displayedColumns: string[] = ['vin', 'pesel', 'rentalBegin', 'rentalEnd', 'pricePerDay', 'deposit', 'rentalStatus', 'paymentStatus', 'totalPayment', 'currentBalance', 'Bar', 'menu1'];
  rentalService: RentalService;
  rentals: any;

  paymentStatuses = paymentStatusUpdate;


  loadRentals(): void {
    this.rentalService.loadRentals()
      .subscribe(data => {
        this.rentals = data;
      })
  }

  deleteRentals(): void {
    this.rentalService.deleteRentals()
      .subscribe(() => {
        this.loadRentals();
      })
  }

  createRentals(rental: any): void {
    this.rentalService.createRentals(rental)
      .subscribe(() => {
        this.loadRentals();
      })
  }

  payForRental(rental: Rental, amount: number): void {
    this.rentalService.paySpecificAmount(amount, rental.id)
      .subscribe(() => {
        this.loadRentals()
      })
  }

  changeStatus(vin: string): void {
    this.rentalService.changePaymentStatus(vin)
      .subscribe(() => {
        this.loadRentals()
      })
  }

  filterByPaymentStatus(event: any): void {
    this.rentalService.filterByStatus(event.value)
      .subscribe((rentals) => {
        this.rentals = rentals;
      });
  }

  filterRentalByPaymentStatus(input: any): void {
    const statusInput = input.value;
    if (statusInput.length > 1) {
      this.rentalService.filterByStatus(statusInput)
        .subscribe((rentals) => {
          this.rentals = rentals;
        })
    } else {
      this.loadRentals();
    }
  }

  openPaymentDialog(rentalId: string): void {
    const dialogRef = this.dialog.open(RentalPaymentDialogComponent, {
      width: '250px',
      data: {
        rentalId
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.rentalService.paySpecificAmount(formData.amount, formData.rentalId)
        .subscribe(() => {
          this.loadRentals()
        })
    })
  }
  openDataDialog(vin: string): void {
    const dialogRef = this.dialog.open(RentalDialogDataComponent, {
      height: '250px',
      width: '800px',
      data: {
        rental: this.rentalService.loadRental(vin)
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }

  searchRentalByPhrase(input: any): void {
    const Input = input.value;
    if (Input.length > 1) {
      this.rentalService.searchRentalByPhrase(Input)
        .subscribe((rentals) => {
          this.rentals = rentals;
        })
    } else {
      this.loadRentals();
    }
  }
}
