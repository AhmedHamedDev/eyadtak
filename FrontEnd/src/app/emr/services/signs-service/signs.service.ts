import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  private baseUrl: string = environment.apiEndpoint;
  private token: string = localStorage.getItem("token");

  constructor(private myclient: HttpClient) { }

  GetPatientSigns(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Signs/GetPatientSigns/${patientId}`, {headers:{'token': this.token}});
  }

  GetSigns(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Signs/GetSigns?Skip=${skip}&Take=${take}`, {headers:{'token': this.token}});
  }
}
