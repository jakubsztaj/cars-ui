import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { RenterDialogPersonalDataComponent } from "../renter-management/renter-dialog/renter-dialog-personal-data/renter-dialog-personal-data.component";
import { RenterService } from "../../service/renter.service";

@Component({
  selector: 'app-search-management',
  templateUrl: './search-management.component.html',
  styleUrls: ['./search-management.component.css']
})
export class SearchManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();


  constructor(public dialog: MatDialog, renterService: RenterService) {
    this.renterService = renterService;

  }


  displayedColumnsRentals: string[] = ['vin', 'pesel', 'rentalBegin', 'rentalEnd', 'pricePerDay', 'deposit', 'rentalStatus', 'paymentStatus', 'totalPayment', 'currentBalance', 'Bar'];
  displayedColumnsRenters: string[] = ['pesel', 'menu'];
  displayedColumnsCars: string[] = ['name', 'type', 'plates', 'vin', 'price', 'carStatus', 'lastRentalDate', 'bringBackDate'];
  search: any;
  renterService: RenterService;

  openDataDialog(pesel: string): void {
    const dialogRef = this.dialog.open(RenterDialogPersonalDataComponent, {
      height: '250px',
      width: '800px',
      data: {
        renter: this.renterService.loadRenter(pesel)
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }
}
