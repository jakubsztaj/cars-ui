import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RenterDialogContentComponent } from "./renter-dialog-content/renter-dialog-content.component";
import { RenterService } from "../../../service/renter.service";

@Component({
  selector: 'app-renter-dialog',
  templateUrl: './renter-dialog.component.html',
  styleUrls: ['./renter-dialog.component.css']
})
export class RenterDialogComponent {

  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, public renterService: RenterService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RenterDialogContentComponent, {
      width: '250px',
      data: {
        renterName: "",
        renterLastName: "",
        renterPesel: "",
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }
}
