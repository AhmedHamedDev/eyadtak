import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { PatientSessionsComponent } from './components/patient-sessions/patient-sessions.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsGridComponent } from './components/patients-grid/patients-grid.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';

const routes: Routes = [
  { path: 'patients',canActivate: [AuthGuardService],  component: PatientsGridComponent },
  { path: 'patient/:id',canActivate: [AuthGuardService],  component: PatientComponent },
  { path: 'sessions/:id',canActivate: [AuthGuardService],  component: PatientSessionsComponent },
  { path: 'session-details/:id',canActivate: [AuthGuardService],  component: SessionDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EmrRoutingModule { }
