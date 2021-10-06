import { Component, Inject, Injectable } from '@angular/core';
import { RentalService } from "../../../../service/rental.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";


@Component({
  selector: 'app-rental-payment-dialog',
  templateUrl: './rental-payment-dialog.component.html',
  styleUrls: ['./rental-payment-dialog.component.css']
})
@Injectable({providedIn: 'root'})
export class RentalPaymentDialogComponent {

  constructor(public dialogRef: MatDialogRef<RentalPaymentDialogComponent>, rentalService: RentalService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.rentalService = rentalService;
    this.rentalId = data.rentalId;
  }

  displayedColumns: string[] = ['menu']
  rentalService: RentalService;
  amount = 0;
  rentalId: string;


  payForRental(rentalId: string): void {
    const amount = this.amount
    this.dialogRef.close({rentalId, amount});
  }
}
