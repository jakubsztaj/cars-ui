import {Component, EventEmitter, Output} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {CarService} from "../../../../service/car.service";
import {
  CarDialogContentComponent
} from "../../../car-management/car-dialog/car-dialog-content/car-dialog-content.component";

@Component({
  selector: 'app-staff-dialog',
  templateUrl: './staff-dialog-content-component.html',
  styleUrls: ['./staff-dialog-content.component.css']
})
export class StaffDialogContentComponent {
  @Output()
  newItemEvent2 = new EventEmitter<any>();

  constructor(public dialog2: MatDialog, public carService: CarService) {
  }

}
