import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {
  private baseUrl: string = environment.apiEndpoint;
  private token: string = localStorage.getItem("token");

  constructor(private myclient: HttpClient) { }

  GetPatientSymptoms(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Symptoms/GetPatientSymptoms/${patientId}`, {headers:{'token': this.token}});
  }

  GetSymptoms(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Symptoms/GetSymptoms?Skip=${skip}&Take=${take}`, {headers:{'token': this.token}});
  }
}
