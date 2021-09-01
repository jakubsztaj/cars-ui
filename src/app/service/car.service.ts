import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  client: HttpClient;
  url = 'http://localhost:8080/cars/';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  loadCars(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  deleteCars(): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete`);
  }

  rentCar(vin: string): Observable<any> {
    return this.http.post <any>(`${this.url}/car/rent/${vin}`, {});
  }

  bringBackCar(vin: string): Observable<any> {
    return this.http.post <any>(`${this.url}/car/bring/${vin}`, {});
  }

  startCar(vin: string): Observable<any> {
    return this.http.post <any>(`${this.url}/start/${vin}`, {});
  }

  stopCar(vin: string): Observable<any> {
    return this.http.post <any>(`${this.url}/stop/${vin}`, {});
  }

  deleteCar(vin: string): Observable<any> {
    return this.http.delete <any>(`${this.url}/car/delete/${vin}`);
  }

  addCar(car: any): Observable<any> {
    return this.http.post <any>(`${this.url}/add`, car);
  }

  filterCarsByVin(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/vin/${input}`)
  }

  filterCarsByName(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/name/${input}`);
  }

  filterCarsByType(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/type/${input}`);
  }

  countStartedCars(): Observable<any> {
    return this.http.get <any>(`${this.url}/count/started`)
  }
}
