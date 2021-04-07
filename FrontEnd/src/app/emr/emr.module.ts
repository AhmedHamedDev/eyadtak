import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmrRoutingModule } from './emr-routing.module';
import { PatientComponent } from './components/patient/patient.component';


@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    EmrRoutingModule
  ]
})
export class EmrModule { }
