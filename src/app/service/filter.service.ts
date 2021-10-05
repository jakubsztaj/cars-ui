import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  client: HttpClient;
  url = 'http://localhost:8080/filter';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  filterCarsByVin(vin: string): Observable<any> {
    return this.http.get <any>(`${this.url}/${vin}`)
  }

  filterCarsByName(name: string): Observable<any> {
    return this.http.get <any>(`${this.url}/${name}`);
  }

  filterCarsByType(type: string): Observable<any> {
    return this.http.get <any>(`${this.url}/type/${type}`);
  }

  filterByStatus(input: any): Observable<any> {
    return this.http.get <any>(`${this.url}/${input}`)
  }
}
