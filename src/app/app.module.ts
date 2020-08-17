import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DashboardMainComponent } from './view/dashboard-main/dashboard-main.component';
import { NewCustomerComponent } from './view/new-customer/new-customer.component';
import { AllCustomersComponent } from './view/all-customers/all-customers.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CustomerService} from './service/customer.service';
import { ItemComponent } from './view/item/item.component';
import { AllItemComponent } from './view/all-item/all-item.component';
import {ItemService} from './service/item.service';
import { NewOrderComponent } from './view/new-order/new-order.component';
import {OrderService} from './service/order.service';
import { ItemReportComponent } from './view/item-report/item-report.component';
import {ReportService} from './service/report.service';
import { CustomerReportComponent } from './view/customer-report/customer-report.component';
import {DashboardService} from './service/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardMainComponent,
    NewCustomerComponent,
    AllCustomersComponent,
    ItemComponent,
    AllItemComponent,
    NewOrderComponent,
    ItemReportComponent,
    CustomerReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService,ItemService,OrderService,ReportService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
