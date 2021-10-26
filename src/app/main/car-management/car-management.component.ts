import { Component, EventEmitter, Output } from '@angular/core';
import { CarService } from "../../service/car.service";
import { MatDialog } from "@angular/material/dialog";
import { CarDialogDataComponent } from "./car-dialog/car-dialog-data/car-dialog-data.component";

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(carService: CarService, public dialog: MatDialog) {
    this.carService = carService;
    this.loadCars();
  }

  displayedColumns: string[] = ['name', 'type', 'plates', 'vin', 'price', 'carStatus', 'lastRentalDate', 'bringBackDate', 'date', 'menu'];
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

  deleteCar(vin: string): void {
    this.carService.deleteCar(vin)
      .subscribe(() => {
        this.loadCars();
      })
  }

  addCar(car: any): void {
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

  openCarDataDialog(vin: string): void {
    const dialogRef = this.dialog.open(CarDialogDataComponent, {
      height: '250px',
      width: '800px',
      data: {
        car: this.carService.loadCar(vin)
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }

  searchCarsByPhrase(input: any): void {
    const Input = input.value;
    if (Input.length > 1) {
      this.carService.searchCarByPhrase(Input)
        .subscribe((cars) => {
          this.cars = cars;
        })
    } else {
      this.loadCars();
    }
  }

}
