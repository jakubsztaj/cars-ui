import { Component, Inject, Injectable} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { CarService } from "../../../../service/car.service";

@Component({
  selector: 'app-car-dialog-data',
  templateUrl: './car-dialog-data.component.html',
  styleUrls: ['./car-dialog-data.component.css']
})
@Injectable({providedIn: 'root'})
export class CarDialogDataComponent {

  car: any;


  constructor(carService: CarService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.carService = carService;
    data.car.subscribe((car: any) => {
      this.car = [car]
    })
  }

  displayedColumns: string[] = ['name', 'type', 'manufacturingYear', 'segment', 'transmission', 'fuelType', 'typeOfDrive', 'doors', 'seats', 'mpg'];
  carService: CarService;


  loadCar(vin: string): void {
    this.carService.loadCar(vin)
      .subscribe(data => {
        this.car = data;
      })
  }
}
