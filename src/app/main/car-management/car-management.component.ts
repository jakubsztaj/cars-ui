import { Component } from '@angular/core';
import { CarService } from "../../service/car.service";

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent {

  constructor(carService: CarService) {
    this.carService = carService;
    this.loadCars();
  }


  displayedColumns: string[] = ['name', 'type', 'plates', 'vin', 'manufacturingYear',
    'category', 'rented', 'started', 'lastRentalDate', 'bringBackDate', 'date', 'menu'];

  carService: CarService;
  cars: any;

  loadCars(): void {
    this.carService.loadCars()
      .subscribe(data => {
        this.cars = data;
      })

  }

  deleteCars(): void {
    this.carService.deleteCars()
      .subscribe(() => {
        this.loadCars();
      })

  }

  rentCar(vin: string): void {
    this.carService.rentCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  bringBackCar(vin: string): void {
    this.carService.bringBackCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  startCar(vin: string): void {
    this.carService.startCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  stopCar(vin: string): void {
    this.carService.stopCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  deleteCar(vin: string): void {
    this.carService.deleteCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  addCar(): void {
    const name = window.prompt("What name?")
    const type = window.prompt("What type?")
    const category = window.prompt("Which category?")
    const manufacturingYear = window.prompt("Which year?")
    const car = {
      name,
      type,
      category,
      manufacturingYear
    }

    this.carService.addCar(car)
      .subscribe(() => {
        this.loadCars();
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

  onDateChange(input: any): void {
    console.log(input.value);
  }
}
