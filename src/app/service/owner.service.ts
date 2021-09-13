import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Owner} from "../model/Owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  client: HttpClient;
  url = 'http://localhost:8080/owners/';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  loadOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.url);
  }
}
