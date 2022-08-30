import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { CoordinacionComponent } from './views/principal/coordinacion/coordinacion.component';
import { ContratacionComponent } from './views/principal/contratacion/contratacion.component';
import { InstructorComponent } from './views/principal/instructor/instructor.component';
import { InputsComponent } from './core/inputs/inputs.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarComponent } from './core/consultar/consultar.component';
import { FormComponent } from './core/form/form.component';

=======
import { WindowsComponent } from './core/inputs/windows/windows.component';
import { ConsultarComponent } from './views/consultar/consultar.component';
import { FormularioComponent } from './views/formulario/formulario.component';
>>>>>>> 850e5b38518b00feb7367785b2f1e05d3902d439

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CoordinacionComponent,
    ContratacionComponent,
    InstructorComponent,
    InputsComponent,
<<<<<<< HEAD
    ConsultarComponent,
    FormComponent,
=======
    WindowsComponent,
    ConsultarComponent,
    FormularioComponent
>>>>>>> 850e5b38518b00feb7367785b2f1e05d3902d439
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
