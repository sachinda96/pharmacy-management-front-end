import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {DashboardMainComponent} from './view/dashboard-main/dashboard-main.component';
import {NewCustomerComponent} from './view/new-customer/new-customer.component';
import {AllCustomersComponent} from './view/all-customers/all-customers.component';
import {ItemComponent} from './view/item/item.component';
import {AllItemComponent} from './view/all-item/all-item.component';
import {NewOrderComponent} from './view/new-order/new-order.component';
import {ItemReportComponent} from './view/item-report/item-report.component';
import {CustomerReportComponent} from './view/customer-report/customer-report.component';

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
    {
      path: 'newcustomer',
      pathMatch : 'full',
      redirectTo: '/newcust'
    },
    {path : 'dashboardmain' , component : DashboardMainComponent},
    {path : 'newcust' , component : NewCustomerComponent},
    {path : 'newcust/:id' , component : NewCustomerComponent},
    {path : 'allcustomer' , component : AllCustomersComponent},
    {path : 'item' , component : ItemComponent},
    {path : 'item/:id' , component : ItemComponent},
    {path : 'allitem' , component : AllItemComponent},
    {path : 'order' , component : NewOrderComponent},
    {path : 'itemReport' , component : ItemReportComponent},
    {path : 'customerReport' , component : CustomerReportComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
