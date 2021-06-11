import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsSearchCriteria } from '../../../shared/models/PatientsSearchCriteria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmrService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientInfo(patientId): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientInfo/${patientId}`, {headers:{'token': token}});
  }

  GetPatientSessions(patientId): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientSessions/${patientId}`, {headers:{'token': token}});
  }

  GetSessionDetails(sessionId: number): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetSessionDetails/${sessionId}`, {headers:{'token': token}});
  }

  GetPatientHistoryNotes(patientId): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryNotes/${patientId}`, {headers:{'token': token}});
  }

  GetPatientHistoryChiefComplaints(patientId): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryChiefComplaints/${patientId}`, {headers:{'token': token}});
  }

  SavePatientHistory(data): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.post<any>(`${this.baseUrl}/EMR/SavePatientHistory`, data, {headers:{'token': token}});
  }

  GetPatients(patientsSearchCriteria: PatientsSearchCriteria): Observable<any> {
    let token: string = localStorage.getItem("token");
    return this.myclient.post<any>(`${this.baseUrl}/EMR/GetPatients`, patientsSearchCriteria, {headers:{'token': token}});
  }

}
