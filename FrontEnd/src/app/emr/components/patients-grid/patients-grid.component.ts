import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { Abilities } from 'src/app/shared/enums/Abilities';
import { Gender } from 'src/app/shared/models/Gender';

import { Patient } from 'src/app/shared/models/Patients';
import { AuthSubjectService } from 'src/app/shared/services/auth-subject/auth-subject.service';
import { PatientsSearchCriteria } from '../../../shared/models/PatientsSearchCriteria';
import { EmrService } from '../../services/emr-service/emr.service';

@Component({
  selector: 'app-patients-grid',
  templateUrl: './patients-grid.component.html',
  styleUrls: ['./patients-grid.component.css'],
})
export class PatientsGridComponent implements OnInit, OnDestroy{
  pageNumber:number= 0;
  pageSize: number = 5;
  columns;
  totalRecords: number;
  pageReport = 'Showing 0 to 0 of 0 items';
  rowsPerPageOptions = [5, 25, 50];
  patients: Patient[];
  subscription: Subscription;
  abilities: number[];
  Abilities = Abilities;

  Genders: Gender[];
  selectedGender: Gender;
  toggle:boolean = false;
  patientSearchCriteria: PatientsSearchCriteria = new PatientsSearchCriteria();
  
  constructor(private emrService: EmrService,private router:Router, private authSubjectService: AuthSubjectService, ) {}
    
  ngOnInit(): void {
    this.setupTableSettings();

    this.Genders = [
      {genderId: 0, genderName: "All"},
      {genderId: 1, genderName: "Male"},
      {genderId: 2, genderName: "Female"}
    ];

    this.patientSearchCriteria.skip = 0;
    this.patientSearchCriteria.take = this.pageSize;
    this.selectedGender = this.Genders[0];

    this.authSubjectService.getSubject().subscribe(res => {
      this.abilities = res.abilitiesIds;
    })
  }

  setupTableSettings() {
    this.columns = [
      { field: 'name', header: 'User Name', width: '20%', sortable: false },
      { field: 'number', header: 'Phone Number', width: '20%', sortable: false,},
      { field: 'email', header: 'Email', width: '20%', sortable: false, },
      { field: 'gender', header: 'Gender', width: '20%', sortable: false, },
      { field: "actionButtons", header: "",}
    ];
  }

  onPatientSelectNewSession(patientId) {
    this.router.navigate([`/emr/patient/`+patientId]);
  }

  onPatientSelectDetails(patientId) {
    this.router.navigate([`/emr/sessions/`+patientId]);
  }
  
  loadPatients(eventData) {
    let pageIndex = eventData.first / eventData.rows;
    this.patientSearchCriteria.take = eventData.rows;
    this.patientSearchCriteria.skip = eventData.rows * pageIndex;
    this.search();
  }

  search(){
    this.toggle = true;
    this.patientSearchCriteria.genderId = this.selectedGender.genderId;
    this.subscription = this.emrService.GetPatients(this.patientSearchCriteria).subscribe(resp => {
      this.toggle = false;
      this.patients = resp.message.patients;
      this.totalRecords = resp.message.totalRecords;
      this.pageReport = `Showing ${ this.totalRecords > 0 ? '{first}' : 0 } to {last} of {totalRecords} items`;
    })
  }

  ngOnDestroy() :void{
    this.subscription?.unsubscribe();
  }
}
