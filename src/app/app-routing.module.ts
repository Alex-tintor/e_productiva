import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContratacionComponent} from '../app/views/principal/contratacion/contratacion.component';
import {CoordinacionComponent} from '../app/views/principal/coordinacion/coordinacion.component';
import {InstructorComponent} from '../app/views/principal/instructor/instructor.component';
import {AppComponent} from '../app/app.component';


const routes: Routes = [
  {path:'contratacion', component: ContratacionComponent},
  {path:'coordinacion', component: CoordinacionComponent},
  {path:'instructor', component: InstructorComponent},
  {path:'componente', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
