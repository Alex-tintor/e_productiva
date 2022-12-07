import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { PrincipalComponent } from './views/principal/principal.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
