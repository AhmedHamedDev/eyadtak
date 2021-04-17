import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmrService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientInfo(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientInfo/${patientId}`);
  }

  GetPatientHistoryNotes(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryNotes/${patientId}`);
  }

  GetPatientHistoryChiefComplaints(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/EMR/GetPatientHistoryChiefComplaints/${patientId}`);
  }

  SavePatientHistory(data): Observable<any> {
    return this.myclient.post<any>(`${this.baseUrl}/EMR/SavePatientHistory`, data);
  }
}
