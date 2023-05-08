import { Component, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { RenterService } from "../../../../service/renter.service";

@Component({
  selector: 'app-renter-dialog-personal-data',
  templateUrl: './renter-dialog-personal-data.component.html',
  styleUrls: ['./renter-dialog-personal-data.component.css']
})
@Injectable({providedIn: 'root'})
export class RenterDialogPersonalDataComponent {

  renter: any;


  constructor(renterService: RenterService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.renterService = renterService;
    data.renter.subscribe((renter: any) => {
      this.renter = [renter]
    })
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'placeOfResidence', 'phoneNumber', "email", "login", "password"];
  renterService: RenterService;

}

