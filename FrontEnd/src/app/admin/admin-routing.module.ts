import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { RolesComponent } from './components/roles/roles.component';


const routes: Routes = [
  { path: 'roles', canActivate: [AuthGuardService], component: RolesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
