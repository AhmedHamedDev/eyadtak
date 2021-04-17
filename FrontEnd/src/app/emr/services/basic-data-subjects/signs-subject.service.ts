import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sign } from '../../models/Sign';
import { SignsService } from '../signs-service/signs.service';

@Injectable({
  providedIn: 'root'
})
export class SignsSubjectService {


  private take: number = environment.take;
  private static data: Sign[] = [];
  private static subject = new BehaviorSubject(SignsSubjectService.data);

  constructor(private signsService: SignsService, private toastr: ToastrService,) {
    this.LoadSigns(0);
  }

  private LoadSigns(skip: number) {
    this.signsService.GetSigns(skip, this.take).subscribe(resp => {
      if (resp.errorHappen == true)
        this.toastr.error(resp.message, "Sorry :(")
      else if (resp.errorHappen == false) {
        if(resp.message && resp.message.length > 0)
          this.next([...SignsSubjectService.data, ...resp.message])
        if(!resp.isReachEnd)
          this.LoadSigns(skip+=this.take);
      }
    })
  }

  getSubject() {
    return SignsSubjectService.subject;
  }

  next(data) {
    SignsSubjectService.data = data;
    SignsSubjectService.subject.next(data);
  }

  current() {
    return SignsSubjectService.subject.value;
  }
}
