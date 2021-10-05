import { Component } from '@angular/core';
import { CarService } from "../../service/car.service";
import { MatDialog } from "@angular/material/dialog";
import { RentalService } from "../../service/rental.service";

@Component({
  selector: 'app-filter-management',
  templateUrl: './filter-management.component.html',
  styleUrls: ['./filter-management.component.css']
})
export class FilterManagementComponent {

  constructor(carService: CarService, rentalService: RentalService) {
    this.carService = carService;
    this.rentalService = rentalService;
  }

  carService: CarService;
  rentalService: RentalService;
  cars: any;
  rentals: any;

  loadCars(): void {
    this.carService.loadCars()
      .subscribe(data => {
        this.cars = data;
      })

  }

  loadRentals(): void {
    this.rentalService.loadRentals()
      .subscribe(data => {
        this.rentals = data;
      })
  }

  filterCarsByName(input: any): void {
    const nameInput = input.value;
    if (nameInput.length > 1) {
      this.carService.filterCarsByName(nameInput)
        .subscribe((cars) => {
          this.cars = cars;
        })
    } else {
      this.loadCars();
    }
  }

  filterCarsByVin(input: any): void {
    const nameInput = input.value;
    if (nameInput.length > 1) {
      this.carService.filterCarsByVin(nameInput)
        .subscribe((cars) => {
          this.cars = cars;
        })
    } else {
      this.loadCars();
    }
  }

  filterCarsByType(input: any): void {
    const typeInput = input.value;
    if (typeInput.length > 1) {
      this.carService.filterCarsByType(typeInput)
        .subscribe((cars) => {
          this.cars = cars;
        })
    } else {
      this.loadCars();
    }
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
}
