import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Rental } from "../model/Rental";

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  client: HttpClient;
  url = 'http://localhost:8080/rentals/';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  loadRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.url);
  }

  deleteRentals(): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete`);
  }

  createRentals(rental: any): Observable<any> {
    return this.http.post<any>(`${this.url}/add`, rental)
  }

  changePaymentStatus(vin: string): Observable<any> {
    return this.http.post<any>(`${this.url}/payment/completed/${vin}`, {});
  }
  filterByStatus(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/${input}`)
  }
  filterByPayment(paymentStatus: string): Observable<any> {
    return this.http.get <any>(`${this.url}/${paymentStatus}`)
  }
}
