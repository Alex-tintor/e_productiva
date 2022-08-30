import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { CoordinacionComponent } from './views/principal/coordinacion/coordinacion.component';
import { ContratacionComponent } from './views/principal/contratacion/contratacion.component';
import { InstructorComponent } from './views/principal/instructor/instructor.component';
import { InputsComponent } from './core/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarComponent } from './core/consultar/consultar.component';
import { FormComponent } from './core/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CoordinacionComponent,
    ContratacionComponent,
    InstructorComponent,
    InputsComponent,
    ConsultarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
