import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StaffService} from "../../service/staff.service";
import {StaffDialogContentComponent} from "./staff-dialog/staff-dialog-content/staff-dialog-content-component";
import {
  RenterDialogPersonalDataComponent
} from "../renter-management/renter-dialog/renter-dialog-personal-data/renter-dialog-personal-data.component";
import {StaffDialogPersonalData} from "./staff-dialog/staff-dialog-personal-data/staff-dialog-personal-data";

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(staffService: StaffService, public dialog: MatDialog) {
    this.staffService = staffService;
    this.loadStaffMembers();
  }

  displayedColumns: string[] = ['pesel', "role", "menu"];
  staffService: StaffService;
  staffMember: any;

  addStaffMember(): void {
    const firstName = window.prompt("What name?")
    const lastName = window.prompt("What lastName?")
    const placeOfResidence = window.prompt("What placeOfResidence?")
    const phoneNumber = window.prompt("What phoneNumber?")
    const login = window.prompt("What login?")
    const password = window.prompt("What password?")
    const role = window.prompt("What role?")
    const staffMember = {
      firstName,
      lastName,
      placeOfResidence,
      phoneNumber,
      login,
      password,
      role
    }
    this.staffService.addStaff(staffMember)
      .subscribe(() => {
        this.loadStaffMembers();
      })
  }

  loadStaffMembers(): void {
    this.staffService.loadStaffMembers()
      .subscribe(data => {
        this.staffMember = data;
      })
  }

  loadStaff(pesel: string): void {
    this.staffService.loadStaffMemberByPesel(pesel)
      .subscribe(data => {
        this.staffMember = data;
      })
  }

  deleteStaffMembers(): void {
    this.staffService.deleteStaffMembers()
      .subscribe(() => {
        this.loadStaffMembers();
      })
  }

  deleteStaffMember(staffId: string): void {
    this.staffService.deleteStaffMember(staffId)
      .subscribe(() => {
        this.loadStaffMembers();
      })
  }

  openDataDialog(pesel: string): void {
    const dialogRef = this.dialog.open(StaffDialogPersonalData, {
      height: '250px',
      width: '800px',
      data: {
        renter: this.staffService.loadStaffMemberByPesel(pesel)
      }
    });
    dialogRef.afterClosed().subscribe(formData => {
      this.newItemEvent.emit(formData);
    })
  }
}
