import {Component, Inject, Injectable} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CarService} from "../../../../service/car.service";

@Component({
  selector: 'app-car-dialog-additional-data',
  templateUrl: './car-dialog-additional-data.component.html',
  styleUrls: ['./car-dialog-additional-data.component.css']
})
@Injectable({providedIn: 'root'})
export class CarDialogAdditionalDataComponent {

  car: any;

  constructor(carService: CarService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.carService = carService;
    data.car.subscribe((car: any) => {
      this.car = [car]
    })
  }

  displayedColumns: string[] = ['name', 'type', 'plates', 'vin', 'manufacturingYear',
    'transmission', 'fuelType', 'typeOfDrive', 'doors', 'seats', 'price', 'mpg', 'carStatus', 'lastRentalDate', 'bringBackDate', 'date'];
  carService: CarService;

  onDateChange(input: any): void {
    console.log(input.value);
  }
  loadCar(vin: string): void {
    this.carService.loadCar(vin)
      .subscribe(data => {
        this.car = data;
      })
  }
}
