import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnosesService {

  private baseUrl: string = environment.apiEndpoint;
  private token: string = localStorage.getItem("token");

  constructor(private myclient: HttpClient) { }

  GetPatientDiagnoses(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Diagnoses/GetPatientDiagnoses/${patientId}`, {headers:{'token': this.token}});
  }

  GetDiagnoses(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Diagnoses/GetDiagnoses?Skip=${skip}&Take=${take}`, {headers:{'token': this.token}});
  }
}
