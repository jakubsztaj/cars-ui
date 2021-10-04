import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RenterDialogContentComponent } from "./renter-dialog-content/renter-dialog-content.component";
import { RenterService } from "../../../service/renter.service";
import { RenterDialogPersonalDataComponent } from "./renter-dialog-personal-data/renter-dialog-personal-data.component";

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
        renterPlaceOfResidence: "",
        renterPesel: "",
        email: ""
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }

  openDataDialog(): void {
    const dialogRef = this.dialog.open(RenterDialogPersonalDataComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }
}
