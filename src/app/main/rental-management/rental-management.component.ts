import { Component } from '@angular/core';
import { RentalService } from "../../service/rental.service";

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

  displayedColumns: string[] = ['vin', 'firstName', 'lastName', 'pesel', 'rentalBegin', 'rentalEnd',];
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
      .subscribe(()=> {
      this.loadRentals();
    })
  }
}
