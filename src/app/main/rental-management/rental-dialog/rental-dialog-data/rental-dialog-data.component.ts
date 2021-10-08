import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {RentalService} from "../../../../service/rental.service";

@Component({
  selector: 'app-rental-dialog-data',
  templateUrl: './rental-dialog-data.component.html',
  styleUrls: ['./rental-dialog-data.component.css']
})

@Injectable({providedIn: 'root'})
export class RentalDialogDataComponent {

  rental: any;

  constructor(rentalService: RentalService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.rentalService = rentalService;
    data.rental.subscribe((rental: any) => {
      this.rental = [rental]
    })
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'placeOfResidence', 'phoneNumber','location', 'email'];
  rentalService: RentalService;


  loadRenter(vin: string): void {
    this.rentalService.loadRental(vin)
      .subscribe(data => {
        this.rental = data;
      })
  }
}
