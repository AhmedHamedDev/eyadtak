import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Diagnosis } from '../../models/Diagnosis';
import { DiagnosesService } from '../diagnoses-service/diagnoses.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosesSubjectService {


  private take: number = environment.take;
  private static data: Diagnosis[] = [];
  private static subject = new BehaviorSubject(DiagnosesSubjectService.data);

  constructor(private diagnosesService: DiagnosesService, private toastr: ToastrService,) {
    this.LoadDiagnoses(0);
  }

  private LoadDiagnoses(skip: number) {
    this.diagnosesService.GetDiagnoses(skip, this.take).subscribe(resp => {
      if (resp.errorHappen == true)
        this.toastr.error(resp.message, "Sorry :(")
      else if (resp.errorHappen == false) {
        if(resp.message && resp.message.length > 0)
          this.next([...DiagnosesSubjectService.data, ...resp.message])
        if(!resp.isReachEnd)
          this.LoadDiagnoses(skip+=this.take);
      }
    })
  }

  getSubject() {
    return DiagnosesSubjectService.subject;
  }

  next(data) {
    DiagnosesSubjectService.data = data;
    DiagnosesSubjectService.subject.next(data);
  }

  current() {
    return DiagnosesSubjectService.subject.value;
  }
}
