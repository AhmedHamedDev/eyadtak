import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { Allergy } from '../../models/Allergy';
import { Diagnosis } from '../../models/Diagnosis';
import { Medicine } from '../../models/Medicine';
import { Sign } from '../../models/Sign';
import { Symptom } from '../../models/Symptom';
import { AllergiesService } from '../../services/allergies-service/allergies.service';
import { DiagnosesService } from '../../services/diagnoses-service/diagnoses.service';
import { EmrService } from '../../services/emr-service/emr.service';
import { MedicinesService } from '../../services/medicines-service/medicines.service';
import { SignsService } from '../../services/signs-service/signs.service';
import { SymptomsService } from '../../services/symptoms-service/symptoms.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent  implements OnInit, OnDestroy {

  abilities: number[];
  Abilities = Abilities;

  sessionId: number;
  sessionDetails: any;

  allergies: Allergy[];
  signs: Sign[];
  symptoms: Symptom[];
  diagnoses: Diagnosis[];
  medicines: Medicine[];


  private subscripe1: Subscription;
  private subscripe2: Subscription;
  private subscripe3: Subscription;
  private subscripe4: Subscription;
  private subscripe5: Subscription;
  private subscripe6: Subscription;
  private subscripe7: Subscription;

  constructor(
    private emrService: EmrService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private symptomsService: SymptomsService,
    private allergiesService: AllergiesService,
    private signsService: SignsService,
    private diagnosesService: DiagnosesService,
    private medicinesService: MedicinesService,
    private authSubjectService: AuthSubjectService, 
  ) { }

  ngOnDestroy() {
    this.subscripe1?.unsubscribe();
    this.subscripe2?.unsubscribe();
    this.subscripe3?.unsubscribe();
    this.subscripe4?.unsubscribe();
    this.subscripe5?.unsubscribe();
    this.subscripe6?.unsubscribe();
    this.subscripe7?.unsubscribe();
  }

  ngOnInit(): void {

    this.authSubjectService.getSubject().subscribe(res => {
      this.abilities = res.abilitiesIds;
    })

    this.subscripe1 = this.route.params.subscribe(params => {
      this.sessionId = params['id'];

      this.subscripe2 = this.emrService.GetSessionDetails(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false)
          this.sessionDetails = resp.message;
      })

      this.subscripe3 = this.symptomsService.GetSessionSymptoms(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false) {
          this.symptoms = resp.message;
        }
      })

      this.subscripe4 = this.allergiesService.GetSessionAllergies(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false) {
          this.allergies = resp.message;
        }
      })

      this.subscripe5 = this.signsService.GetSessionSigns(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false) {
          this.signs = resp.message;
        }
      })

      this.subscripe6 = this.diagnosesService.GetSessionDiagnoses(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false) {
          this.diagnoses = resp.message;
        }
      })

      this.subscripe7 = this.medicinesService.GetSessionMedicines(params['id']).subscribe(resp => {
        if (resp.errorHappen == true)
          this.toastr.error(resp.message, "Sorry :(")
        else if (resp.errorHappen == false) {
          this.medicines = resp.message;
        }
      })

    });

  }


}