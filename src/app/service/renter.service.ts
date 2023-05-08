import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  client: HttpClient;
  url = 'http://localhost:8080/renters';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  addRenter(renter: any): Observable<any> {
    return this.http.post <any>(`${this.url}/add`, renter);
  }

  loadRenters(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  loadRenter(pesel: string): Observable<any> {
    return this.http.get<any>(`${this.url}/load/renter/${pesel}`);
  }

  deleteRenters(): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete`);
  }

  deleteRenter(pesel: string): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete/${pesel}`)
  }

  filterRenterByPesel(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/pesel/${input}`)
  }

  filterRenterByLastName(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/lastName/${input}`)
  }

  filterRenterByPlaceOfResidence(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/placeOfResidence/${input}`)
  }
}
