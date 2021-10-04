import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from "../main/main-app/main-app.component";
import { CarManagementComponent } from "../main/car-management/car-management.component";
import { RentalManagementComponent } from "../main/rental-management/rental-management.component";
import { RenterManagementComponent } from "../main/renter-management/renter-management.component";
import { StatisticsComponent } from "../main/statistics/statistics.component";
import { SupportComponent } from "../main/support/support.component";
import {FilterManagementComponent} from "../main/filter-management/filter-management.component";

const routes: Routes = [
  {path: 'home', component: MainAppComponent},
  {path: 'cars', component: CarManagementComponent},
  {path: 'rentals', component: RentalManagementComponent},
  {path: 'renters', component: RenterManagementComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'support', component: SupportComponent},
  {path: 'filter', component: FilterManagementComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
}
