import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  client: HttpClient;
  url = 'http://localhost:8080/rentals/';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  loadRentals(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  deleteRentals(): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete`);
  }
}
