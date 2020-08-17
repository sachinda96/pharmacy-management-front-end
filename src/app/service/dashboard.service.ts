import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mainUrl} from './customer.service';

const url = '/dashboard';
@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }


  totalOrders(){
    return this.http.get<any>(mainUrl+url+"/totalOrders")
  }

  totalItems(){
    return this.http.get<any>(mainUrl+url+"/totalItems")
  }

  totalCustomers(){
    return this.http.get<any>(mainUrl+url+"/totalCustomers")
  }

  totalUser(){
    return this.http.get<any>(mainUrl+url+"/totalUser")
  }

  totalRemovedItems(){
    return this.http.get<any>(mainUrl+url+"/totalRemovedItems")
  }

  totalRemovedCustomer(){
    return this.http.get<any>(mainUrl+url+"/totalRemovedCustomer")
  }

  totalItemNoValue(){
    return this.http.get<any>(mainUrl+url+"/totalItemNoValue")
  }

  topSevenOrders(){
    return this.http.get<any>(mainUrl+url+"/topSevenOrders")
  }
}
