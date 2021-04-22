import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private baseUrl: string = environment.apiEndpoint;
  private token: string = localStorage.getItem("token");

  constructor(private myclient: HttpClient) { }

  GetPatientMedicines(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Medicines/GetPatientMedicines/${patientId}`, {headers:{'token': this.token}});
  }

  GetMedicines(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Medicines/GetMedicines?Skip=${skip}&Take=${take}`, {headers:{'token': this.token}});
  }
}
