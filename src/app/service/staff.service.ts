import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  client: HttpClient;
  url = 'http://localhost:8080/staff';

  constructor(private http: HttpClient) {
    this.client = http;
  }

  addStaff(staffMember: any): Observable<any> {
    return this.http.post <any>(`${this.url}/add`, staffMember);
  }

  loadStaffMembers(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  loadStaffMember(staffId: string): Observable<any> {
    return this.http.get<any>(`${this.url}/load/staff/${staffId}`);
  }

  deleteStaffMembers(): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete`);
  }

  deleteStaffMember(staffId: string): Observable<any> {
    return this.http.delete <any>(`${this.url}/delete/${staffId}`)
  }
}
