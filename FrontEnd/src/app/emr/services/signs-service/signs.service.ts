import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientSigns(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Signs/GetPatientSigns/${patientId}`);
  }

  GetSigns(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Signs/GetSigns?Skip=${skip}&Take=${take}`);
  }
}
