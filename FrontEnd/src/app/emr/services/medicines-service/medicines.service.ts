import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientMedicines(patientId: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Medicines/GetPatientMedicines/${patientId}`, {headers:{'token': token}});
  }

  GetSessionMedicines(sessionId: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Medicines/GetSessionMedicines/${sessionId}`, {headers:{'token': token}});
  }

  GetMedicines(skip: number, take: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Medicines/GetMedicines?Skip=${skip}&Take=${take}`, {headers:{'token': token}});
  }
}
