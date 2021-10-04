import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  client: HttpClient;
  url = 'http://localhost:8080/filter';

  constructor(private http: HttpClient) {
    this.client = http;
  }
}
