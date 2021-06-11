import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { environment } from 'src/environments/environment';
import { Symptom } from '../../models/Symptom';
import { SymptomsService } from '../symptoms-service/symptoms.service';

@Injectable({
  providedIn: 'root'
})
export class SymptomsSubjectService {


  private take: number = environment.take;
  private static data: Symptom[] = [];
  private static subject = new BehaviorSubject(SymptomsSubjectService.data);

  constructor(private symptomsService: SymptomsService, private toastr: ToastrService,private authSubjectService: AuthSubjectService,) {
    this.authSubjectService.getSubject().subscribe(res => {
      if(res.abilitiesIds?.includes(Abilities.Logout)){
        this.LoadSymptoms(0);
      }
    })
  }

  private LoadSymptoms(skip: number) {
    this.symptomsService.GetSymptoms(skip, this.take).subscribe(resp => {
      if (resp.errorHappen == true)
        this.toastr.error(resp.message, "Sorry :(")
      else if (resp.errorHappen == false) {
        if(resp.message && resp.message.length > 0)
          this.next([...SymptomsSubjectService.data, ...resp.message])
        if(!resp.isReachEnd)
          this.LoadSymptoms(skip+=this.take);
      }
    })
  }

  getSubject() {
    return SymptomsSubjectService.subject;
  }

  next(data) {
    SymptomsSubjectService.data = data;
    SymptomsSubjectService.subject.next(data);
  }

  current() {
    return SymptomsSubjectService.subject.value;
  }
}
