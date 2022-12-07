import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { InputsComponent } from './core/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SlidebarComponent } from './core/inputs/slidebar/slidebar.component';

import { InstructoresComponent } from './views/instructores/instructores.component';
import { FormatosComponent } from './views/formatos/formatoscomponent';
import { AprendicesComponent } from './views/aprendices/aprendices.component';
import { FichasComponent } from './views/fichas/fichas.component';
import { CentrosFormacionComponent } from './views/centros-formacion/centros-formacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramasComponent } from './views/programas/programas.component';
import { CreteAprendizComponent } from './views/CRUD/crete/create-aprendiz/crete-aprendiz.component';
import { CreteCentroComponent } from './views/CRUD/crete/create-centro/crete-centro.component';
import { CreteFichaComponent } from './views/CRUD/crete/create-ficha/crete-ficha.component';
import { CreteFormatoComponent } from './views/CRUD/crete/create-formato/crete-formato.component';
import { CreteInstructorComponent } from './views/CRUD/crete/create-instructor/crete-instructor.component';
import { CreteProgramaComponent } from './views/CRUD/crete/create-programa/crete-programa.component';
import { UpdateAprendizComponent } from './views/CRUD/update/update-aprendiz/update-aprendiz.component';
import { UpdateCentroComponent } from './views/CRUD/update/update-centro/update-centro.component';
import { UpdateFichaComponent } from './views/CRUD/update/update-ficha/update-ficha.component';
import { UpdateFormatoComponent } from './views/CRUD/update/update-formato/update-formato.component';
import { UpdateInstructorComponent } from './views/CRUD/update/update-instructor/update-instructor.component';
import { UpdateProgramaComponent } from './views/CRUD/update/update-programa/update-programa.component';





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
    CreteAprendizComponent,
    UpdateAprendizComponent,
    CreteCentroComponent,
    CreteFichaComponent,
    CreteFormatoComponent,
    CreteInstructorComponent,
    CreteProgramaComponent,
    UpdateCentroComponent,
    UpdateFichaComponent,
    UpdateFormatoComponent,
    UpdateInstructorComponent,
    UpdateProgramaComponent,
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
