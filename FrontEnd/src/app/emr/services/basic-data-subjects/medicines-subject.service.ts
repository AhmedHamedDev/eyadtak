import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicine } from '../../models/Medicine';
import { MedicinesService } from '../medicines-service/medicines.service';

@Injectable({
  providedIn: 'root'
})
export class MedicinesSubjectService {


  private take: number = environment.take;
  private static data: Medicine[] = [];
  private static subject = new BehaviorSubject(MedicinesSubjectService.data);

  constructor(private medicinesService: MedicinesService, private toastr: ToastrService,) {
    this.LoadMedicines(0);
  }

  private LoadMedicines(skip: number) {
    this.medicinesService.GetMedicines(skip, this.take).subscribe(resp => {
      if (resp.errorHappen == true)
        this.toastr.error(resp.message, "Sorry :(")
      else if (resp.errorHappen == false) {
        if(resp.message && resp.message.length > 0)
          this.next([...MedicinesSubjectService.data, ...resp.message])
        if(!resp.isReachEnd)
          this.LoadMedicines(skip+=this.take);
      }
    })
  }

  getSubject() {
    return MedicinesSubjectService.subject;
  }

  next(data) {
    MedicinesSubjectService.data = data;
    MedicinesSubjectService.subject.next(data);
  }

  current() {
    return MedicinesSubjectService.subject.value;
  }
}
