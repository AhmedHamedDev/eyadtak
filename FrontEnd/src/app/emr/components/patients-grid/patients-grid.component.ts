import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {debounceTime,distinctUntilChanged,} from 'rxjs/operators';

import { Patients } from 'src/app/shared/models/Patients';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patients-grid',
  templateUrl: './patients-grid.component.html',
  styleUrls: ['./patients-grid.component.css'],
})
export class PatientsGridComponent implements OnInit, OnDestroy{
  pageNumber:Number= 1;
  pageSize: Number = 10;
  columns;
  totalRecords: Number;
  pageReport = 'Showing 0 to 0 of 0 items';
  rowsPerPageOptions = [10, 25, 50];
  patients: Patients[];
  private subjectKeyUp = new Subject<any>();
  subscription: Subscription;
  constructor(private patientService: PatientService,private router:Router) {}
    
  ngOnInit(): void {
    this.setupTableSettings();

    this.subscription = this.patientService.getPatients(this.pageNumber, this.pageSize)
                                           .subscribe((res: any) => {
      this.patients = res.data;
      this.totalRecords = res.totalRecords;
      this.pageReport = `Showing ${
        this.totalRecords > 0 ? '{first}' : 0
      } to {last} of {totalRecords} items`;
    });
    this.subjectKeyUp
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchKeyword) => {
        this.patientService.getPatients(this.pageNumber, this.pageSize, searchKeyword)
                           .subscribe(res =>
        {
          this.patients = res.data;
          this.totalRecords = res.totalRecords;
          })
      });
  }
  setupTableSettings() {
    this.columns = [
      { field: 'userName', header: 'User Name', width: '15%', sortable: true },
      {
        field: 'phoneNumber',
        header: 'Phone Number',
        width: '15%',
        sortable: true,
      },
      {
        field: "actionButtons",
        header: "",
      }
    ];
  }
  onSearch(searchKeyword) {
    this.subjectKeyUp.next(searchKeyword);
  }
  onPatientSelect(patientId) {
    this.router.navigate([`/patients`], {
      queryParams: {
        patientId
      },
    });
  }      
  
  loadPatientsLazy(eventData) {
    let pageIndex = eventData.first / eventData.rows;
      this.patientService
        .getPatients(pageIndex, eventData.rows, eventData.globalFilter)
        .subscribe((res: any) => {
          this.totalRecords = res.totalRecords;
          this.patients = res.data;
        });
  }
  ngOnDestroy() :void{
    this.subscription.unsubscribe();
  }
}
