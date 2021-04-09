import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';





const routes: Routes = [
  { path: 'patients', component: PatientsGridComponent },
  { path: 'patient/:id', component: PatientComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EmrRoutingModule { }
