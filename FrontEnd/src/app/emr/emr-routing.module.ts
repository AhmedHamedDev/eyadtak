import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';

const routes: Routes = [
  { path: 'patients',canActivate: [AuthGuardService],  component: PatientsGridComponent },
  { path: 'patient/:id',canActivate: [AuthGuardService],  component: PatientComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EmrRoutingModule { }
