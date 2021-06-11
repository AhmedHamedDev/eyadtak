import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { environment } from 'src/environments/environment';
import { Allergy } from '../../models/Allergy';
import { AllergiesService } from '../allergies-service/allergies.service';

@Injectable({
  providedIn: 'root'
})
export class AllergiesSubjectService {


  private take: number = environment.take;
  private static data: Allergy[] = [];
  private static subject = new BehaviorSubject(AllergiesSubjectService.data);

  constructor(private allergiesService: AllergiesService, private toastr: ToastrService,private authSubjectService: AuthSubjectService,) {
    this.authSubjectService.getSubject().subscribe(res => {
      if(res.abilitiesIds?.includes(Abilities.Logout)){
        this.LoadAllergies(0);
      }
    })
  }

  private LoadAllergies(skip: number) {
    this.allergiesService.GetAllergies(skip, this.take).subscribe(resp => {
      if (resp.errorHappen == true)
        this.toastr.error(resp.message, "Sorry :(")
      else if (resp.errorHappen == false) {
        if(resp.message && resp.message.length > 0)
          this.next([...AllergiesSubjectService.data, ...resp.message])
        if(!resp.isReachEnd)
          this.LoadAllergies(skip+=this.take);
      }
    })
  }

  getSubject() {
    return AllergiesSubjectService.subject;
  }

  next(data) {
    AllergiesSubjectService.data = data;
    AllergiesSubjectService.subject.next(data);
  }

  current() {
    return AllergiesSubjectService.subject.value;
  }
}
