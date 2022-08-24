import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContratacionComponent} from '../app/views/principal/contratacion/contratacion.component';
import {CoordinacionComponent} from '../app/views/principal/coordinacion/coordinacion.component';
import {InstructorComponent} from '../app/views/principal/instructor/instructor.component';
import { PrincipalComponent } from './views/principal/principal.component';


const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'contratacion', component: ContratacionComponent},
  {path:'coordinacion', component: CoordinacionComponent},
  {path:'instructor', component: InstructorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
