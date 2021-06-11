import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {
  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientSymptoms(patientId: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Symptoms/GetPatientSymptoms/${patientId}`, {headers:{'token': token}});
  }

  GetSessionSymptoms(sessionId: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Symptoms/GetSessionSymptoms/${sessionId}`, {headers:{'token': token}});
  }

  GetSymptoms(skip: number, take: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Symptoms/GetSymptoms?Skip=${skip}&Take=${take}`, {headers:{'token': token}});
  }
}
