import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {StaffService} from "../../service/staff.service";
import {StaffDialogContentComponent} from "./staff-dialog/staff-dialog-content/staff-dialog-content-component";

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent {
  @Output()
  newItemEvent2 = new EventEmitter<any>();

  constructor(staffService: StaffService, public dialog: MatDialog) {
    this.staffService = staffService;
    this.loadStaffMembers();
  }

  displayedColumns: string[] = ['username', 'password'];
  staffService: StaffService;
  staffMember: any;

  addStaffMember(): void {
    const username = window.prompt("What username?")
    const password = window.prompt("What password?")
    const staffMember = {
      username,
      password
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

  loadStaff(staffId: string): void {
    this.staffService.loadStaffMember(staffId)
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
}
