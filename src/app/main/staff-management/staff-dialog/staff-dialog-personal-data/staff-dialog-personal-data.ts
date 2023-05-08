import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {RenterService} from "../../../../service/renter.service";
import {StaffService} from "../../../../service/staff.service";

@Component({
  selector: 'app-staff-dialog-personal-data',
  templateUrl: './staff-dialog-personal-data.html',
  styleUrls: ['./staff-dialog-personal-data.css']
})
@Injectable({providedIn: 'root'})
export class StaffDialogPersonalData {

  staffMember: any;

  constructor(staffService: StaffService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.staffService = staffService;
    data.renter.subscribe((staffMember: any) => {
      this.staffMember = [staffMember]
    })
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'placeOfResidence','pesel', 'phoneNumber', "login", "password", "role"];
  staffService: StaffService;


}
