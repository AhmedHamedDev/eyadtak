import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { BeforeRegisterComponent } from './components/before-register/before-register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'activate-account', component: ActivateAccountComponent},
  { path:'forget-password', component: ForgetPasswordComponent},
  { path:'recover-password', component: RecoverPasswordComponent},
  { path:'before-register', component: BeforeRegisterComponent},
  { path:'change-password', canActivate: [AuthGuardService], component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
