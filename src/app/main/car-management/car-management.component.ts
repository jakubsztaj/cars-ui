import {Component, EventEmitter, Output} from '@angular/core';
import { CarService } from "../../service/car.service";
import { Car } from "../../model/Car";
import {MatDialog} from "@angular/material/dialog";
import {
  CarDialogAdditionalDataComponent
} from "./car-dialog/car-dialog-additional-data/car-dialog-additional-data.component";

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(carService: CarService,  public dialog: MatDialog) {
    this.carService = carService;
    this.loadCars();
  }

  displayedColumns: string[] = ['name', 'type', 'manufacturingYear', 'segment', 'carStatus', 'menu'];
  carService: CarService;
  cars: Car[] = [];

  loadCars(): void {
    this.carService.loadCars()
      .subscribe(data => {
        this.cars = data;
      })

  }


  loadCar(vin: string): void {
    this.carService.loadCar(vin)
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

  openDataDialog(vin: string): void {
    const dialogRef = this.dialog.open(CarDialogAdditionalDataComponent, {
      height: '250px',
      width: '1600px',
      data: {
        car: this.carService.loadCar(vin)
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }

}
