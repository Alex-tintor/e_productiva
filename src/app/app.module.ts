import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { InputsComponent } from './core/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './views/principal/dashboard/dashboard.component';
import { SlidebarComponent } from './core/inputs/slidebar/slidebar.component';

import { InstructoresComponent } from './views/principal/instructores/instructores.component';
import { FormatosComponent } from './views/principal/formatos/formatoscomponent';
import { AprendicesComponent } from './views/principal/aprendices/aprendices.component';
import { FichasComponent } from './views/principal/fichas/fichas.component';
import { CentrosFormacionComponent } from './views/principal/centros-formacion/centros-formacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramasComponent } from './views/principal/programas/programas.component';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InputsComponent,
    DashboardComponent,
    SlidebarComponent,
    InstructoresComponent,
    FormatosComponent,
    AprendicesComponent,
    FichasComponent,
    CentrosFormacionComponent,
    ProgramasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
