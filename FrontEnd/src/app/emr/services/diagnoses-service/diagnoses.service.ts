import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnosesService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientDiagnoses(patientId): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Diagnoses/GetPatientDiagnoses/${patientId}`, {headers:{'token': token}});
  }

  GetDiagnoses(skip: number, take: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/Diagnoses/GetDiagnoses?Skip=${skip}&Take=${take}`, {headers:{'token': token}});
  }
}
