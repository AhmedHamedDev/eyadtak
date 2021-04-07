import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmrRoutingModule } from './emr-routing.module';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';


@NgModule({
  declarations: [PatientComponent, PatientsGridComponent],
  imports: [
    CommonModule,
    EmrRoutingModule
  ]
})
export class EmrModule { }
