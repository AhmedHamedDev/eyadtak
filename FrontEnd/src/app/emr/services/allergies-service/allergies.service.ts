import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

  private baseUrl: string = environment.apiEndpoint;

  constructor(private myclient: HttpClient) { }

  GetPatientAllergies(patientId): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Allergies/GetPatientAllergies/${patientId}`);
  }

  GetAllergies(skip: number, take: number): Observable<any> {
    return this.myclient.get<any>(`${this.baseUrl}/Allergies/GetAllergies?Skip=${skip}&Take=${take}`);
  }

}
