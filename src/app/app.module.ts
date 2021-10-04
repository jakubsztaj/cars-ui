import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RoutingModule } from './routing/routing.module';
import { MainAppComponent } from './main/main-app/main-app.component';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CarManagementComponent } from './main/car-management/car-management.component';
import { RentalManagementComponent } from './main/rental-management/rental-management.component';
import { RenterManagementComponent } from './main/renter-management/renter-management.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RenterDialogContentComponent } from './main/renter-management/renter-dialog/renter-dialog-content/renter-dialog-content.component';
import { RenterDialogComponent } from "./main/renter-management/renter-dialog/renter-dialog.component";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { CarDialogContentComponent } from './main/car-management/car-dialog/car-dialog-content/car-dialog-content.component';
import { CarDialogComponent } from "./main/car-management/car-dialog/car-dialog.component";
import { StatisticsComponent } from './main/statistics/statistics.component';
import { MatStepperModule } from "@angular/material/stepper";
import { RentalDialogComponent } from './main/rental-management/rental-dialog/rental-dialog.component';
import { RentalDialogContentComponent } from "./main/rental-management/rental-dialog/rental-dialog-content/rental-dialog-content.component";
import { MatSelectModule } from "@angular/material/select";
import { SupportComponent } from "./main/support/support.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FilterManagementComponent} from "./main/filter-management/filter-management.component";

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    CarManagementComponent,
    RentalManagementComponent,
    RenterManagementComponent,
    RenterDialogComponent,
    RenterDialogContentComponent,
    CarDialogComponent,
    CarDialogContentComponent,
    StatisticsComponent,
    RentalDialogComponent,
    RentalDialogContentComponent,
    SupportComponent,
    FilterManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressBarModule,
    MatToolbarModule,
    RoutingModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatStepperModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [{provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

