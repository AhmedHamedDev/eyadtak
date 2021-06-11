import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { EmrService } from '../../services/emr-service/emr.service';

@Component({
  selector: 'app-patient-sessions',
  templateUrl: './patient-sessions.component.html',
  styleUrls: ['./patient-sessions.component.css']
})
export class PatientSessionsComponent implements OnInit, OnDestroy {

  patientId: number;
  sessions;
  abilities: number[];
  Abilities = Abilities;

  private subscripe1: Subscription;
  private subscripe2: Subscription;

  constructor(private authSubjectService: AuthSubjectService, private emrService: EmrService, private route: ActivatedRoute, private toastr: ToastrService,private router:Router,) { }

  ngOnDestroy(): void {
    this.subscripe1?.unsubscribe();
    this.subscripe2?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscripe1 = this.route.params.subscribe(params => {
      this.patientId = params['id'];

      this.subscripe2 = this.emrService.GetPatientSessions(this.patientId).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false)
          this.sessions = resp.message;
      })

    })

    this.authSubjectService.getSubject().subscribe(res => {
      this.abilities = res.abilitiesIds;
    })
  }

  onSessionSelect(sessionId){
    this.router.navigate([`/emr/session-details/`+sessionId]);
  }

}
