import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { EmrRoutingModule } from './emr-routing.module';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PatientComponent, PatientsGridComponent],
  imports: [
    FormsModule,
    CommonModule,
    EmrRoutingModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    TableModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ChipsModule,
    ProgressSpinnerModule,
    TooltipModule,
    DropdownModule
  ]
})
export class EmrModule {}
