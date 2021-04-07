import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AccountModule } from "./account/account.module";

import { KonvaModule } from "ng2-konva";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { AdminModule } from './admin/admin.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot(),
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    KonvaModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[PanelModule,ButtonModule,InputTextareaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
