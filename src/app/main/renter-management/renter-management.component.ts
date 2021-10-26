import { Component, EventEmitter, Output } from '@angular/core';
import { RenterService } from "../../service/renter.service";
import { RenterDialogPersonalDataComponent } from "./renter-dialog/renter-dialog-personal-data/renter-dialog-personal-data.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-renter-management',
  templateUrl: './renter-management.component.html',
  styleUrls: ['./renter-management.component.css']
})
export class RenterManagementComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  constructor(renterService: RenterService, public dialog: MatDialog) {
    this.renterService = renterService;
    this.loadRenters();
  }

  displayedColumns: string[] = ['pesel', 'menu'];
  renterService: RenterService;
  renters: any;

  addRenter(renter: any): void {
    this.renterService.addRenter(renter)
      .subscribe(() => {
        this.loadRenters();
      })
  }

  loadRenters(): void {
    this.renterService.loadRenters()
      .subscribe(data => {
        this.renters = data;
      })
  }

  loadRenter(pesel: string): void {
    this.renterService.loadRenter(pesel)
      .subscribe(data => {
        this.renters = data;
      })
  }

  deleteRenters(): void {
    this.renterService.deleteRenters()
      .subscribe(() => {
        this.loadRenters();
      })
  }

  deleteRenter(pesel: string): void {
    this.renterService.deleteRenter(pesel)
      .subscribe(() => {
        this.loadRenters();
      })
  }

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

  searchRentersByPhrase(input: any): void {
    const Input = input.value;
    if (Input.length > 1) {
      this.renterService.searchRenterByPhrase(Input)
        .subscribe((renters) => {
          this.renters = renters;
        })
    } else {
      this.loadRenters();
    }
  }
}
