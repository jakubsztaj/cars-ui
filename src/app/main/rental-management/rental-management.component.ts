import { Component, Inject } from '@angular/core';
import { RentalService } from "../../service/rental.service";
import { paymentStatusUpdate} from "../../model/Rental";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-rental-management',
  templateUrl: './rental-management.component.html',
  styleUrls: ['./rental-management.component.css']
})
export class RentalManagementComponent {
  constructor(rentalService: RentalService) {
    this.rentalService = rentalService;
    this.loadRentals();
  }

  displayedColumns: string[] = ['vin', 'firstName', 'lastName', 'pesel', 'rentalBegin', 'rentalEnd', 'pricePerDay', 'deposit', 'location',
    'rentalStatus', 'paymentStatus', 'menu1'];
  rentalService: RentalService;
  rentals: any;

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

  paymentStatuses = paymentStatusUpdate;
}
