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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardMainComponent,
    NewCustomerComponent,
    AllCustomersComponent,
    ItemComponent,
    AllItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
