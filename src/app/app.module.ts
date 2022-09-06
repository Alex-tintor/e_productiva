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
import { PruebaDataComponent } from './components/prueba-data/prueba-data.component';
import { HijoDataComponent } from './components/prueba-data/hijo-data/hijo-data.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CoordinacionComponent,
    ContratacionComponent,
    InstructorComponent,
    InputsComponent,
    PruebaDataComponent,
    HijoDataComponent,
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
