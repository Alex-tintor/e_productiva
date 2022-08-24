import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { CoordinacionComponent } from './views/principal/coordinacion/coordinacion.component';
import { ContratacionComponent } from './views/principal/contratacion/contratacion.component';
import { InstructorComponent } from './views/principal/instructor/instructor.component';
import { InputsComponent } from './core/inputs/inputs.component';
import { WindowsComponent } from './core/inputs/windows/windows.component';
import { ConsultarComponent } from './views/consultar/consultar.component';
import { FormularioComponent } from './views/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CoordinacionComponent,
    ContratacionComponent,
    InstructorComponent,
    InputsComponent,
    WindowsComponent,
    ConsultarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
