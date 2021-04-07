import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Navbar } from '../../models/Navbar';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl: string =  environment.apiEndpoint;

  constructor(private myclient:HttpClient) { }

  GetNavbarElements() : Observable<Navbar>{
    return this.myclient.get<Navbar>(`${this.baseUrl}/Home/GetNavbarElements`);
  }

}
