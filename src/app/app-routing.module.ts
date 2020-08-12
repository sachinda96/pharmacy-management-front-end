import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardMainComponent} from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'dashboard', component: DashboardComponent,
  children:[
    { path: '', redirectTo: 'dashboardmain', pathMatch: 'full' },
    {
      path: 'main',
      pathMatch : 'full',
      redirectTo: '/dashboardmain'
    },
    {path : 'dashboardmain' , component : DashboardMainComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
