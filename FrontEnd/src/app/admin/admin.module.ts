import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './components/roles/roles.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { RoleActionsComponent } from './components/role-actions/role-actions.component';


@NgModule({
  declarations: [RolesComponent, RoleFormComponent, RoleActionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
