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
import {AllOrdersComponent} from './view/all-orders/all-orders.component';
import {OrderReportComponent} from './view/order-report/order-report.component';
import {NewUserComponent} from './view/new-user/new-user.component';
import {AllUserComponent} from './view/all-user/all-user.component';
import {AuthGuard} from './service/AuthGuard';
import {NewSupplierComponent} from "./view/new-supplier/new-supplier.component";
import {AllSupplierComponent} from "./view/all-supplier/all-supplier.component";
import {SupplierOrderComponent} from "./view/supplier-order/supplier-order.component";

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'dashboard',

    canActivate: [AuthGuard],
    component: DashboardComponent,
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
    {path : 'allOrders' , component : AllOrdersComponent},
    {path : 'orderReport' , component : OrderReportComponent},
    {path : 'newuser' , component : NewUserComponent},
    {path : 'alluser' , component : AllUserComponent},
    {path : 'newsupplier' , component : NewSupplierComponent},
    {path : 'allsupplier' , component : AllSupplierComponent},
    {path : 'supplierorder' , component : SupplierOrderComponent},
    {path : 'newsupplier/:id' , component : NewSupplierComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
