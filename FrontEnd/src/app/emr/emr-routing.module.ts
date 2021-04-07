import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



const routes: Routes = [
  { path:'patients', component: PatientsGridComponent},
  { path:'patient/:id', component: PatientComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    PanelModule, 
    ButtonModule,
    InputTextareaModule, 
    TableModule,
    ConfirmDialogModule,
   ],
  exports: [RouterModule, PanelModule, ButtonModule, InputTextareaModule, TableModule, ConfirmDialogModule],
})
export class EmrRoutingModule { }
