import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';



const routes: Routes = [
  { path:'patient/:id', component: PatientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), PanelModule, ButtonModule,InputTextareaModule],
  exports: [RouterModule, PanelModule, ButtonModule, InputTextareaModule]
})
export class EmrRoutingModule { }
