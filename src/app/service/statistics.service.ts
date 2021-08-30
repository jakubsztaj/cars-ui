import { HttpClient } from "@angular/common/http";

export class StatisticsService {
  client: HttpClient;
  url = 'http://localhost:8080/stats';

  constructor(private http: HttpClient) {
    this.client = http;
  }
}
