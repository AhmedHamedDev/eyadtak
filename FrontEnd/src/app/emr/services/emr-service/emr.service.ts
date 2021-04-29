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
  private token: string = localStorage.getItem("token");

  constructor(private myclient: HttpClient) { }

  GetPatientInfo(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientInfo/${patientId}`, {headers:{'token': this.token}});
  }

  GetPatientHistoryNotes(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryNotes/${patientId}`, {headers:{'token': this.token}});
  }

  GetPatientHistoryChiefComplaints(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryChiefComplaints/${patientId}`, {headers:{'token': this.token}});
  }

  SavePatientHistory(data): Observable<any> {
    return this.myclient.post<any>(`${this.baseUrl}/EMR/SavePatientHistory`, data, {headers:{'token': this.token}});
  }

  GetPatients(patientsSearchCriteria: PatientsSearchCriteria): Observable<any> {
    return this.myclient.post<any>(`${this.baseUrl}/EMR/GetPatients`, patientsSearchCriteria, {headers:{'token': this.token}});
  }

}
