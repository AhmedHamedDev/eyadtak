import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private _http: HttpClient) {}

  getPatients(pageNumber, pageSize, searchKeyword = '') :Observable<any>{
    return this._http.get(`${environment.apiEndpoint}/emr/patients`, {
      params: {
        pageNumber,
        pageSize,
        searchKeyword,
      },
    });
  }
}
