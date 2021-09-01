import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class StatisticsService {
  client: HttpClient;
  url = 'http://localhost:8080/stats';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  count(stats: any): Observable<any> {
    return this.http.post <any>(`${this.url}/count`, stats);
  }
}
