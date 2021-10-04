import { Component } from '@angular/core';
import { RenterService } from "../../service/renter.service";

@Component({
  selector: 'app-renter-management',
  templateUrl: './renter-management.component.html',
  styleUrls: ['./renter-management.component.css']
})
export class RenterManagementComponent {

  constructor(renterService: RenterService) {
    this.renterService = renterService;
    this.loadRenters();
  }

  displayedColumns: string[] = ['firstName', 'lastName','placeOfResidence', 'pesel','phoneNumber', 'menu'];
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
}
