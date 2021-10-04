import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Statistics } from "../model/Statistics";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  client: HttpClient;
  url = 'http://localhost:8080/stats';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  getAllStatistics(): Observable<Statistics[]> {
    return this.http.get <Statistics[]>(`${this.url}/`);
  }
}
