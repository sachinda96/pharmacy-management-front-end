import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {mainUrl} from './customer.service';
import {OrderDate} from '../model/order-date';

const url = '/report';
@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllItemReport(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/pdf',
        'Content-Type': 'application/json',
      }),
      'responseType': 'blob' as 'json'
    };
    return this.http.get<any>(mainUrl+url + "/item" ,httpOptions);

  }

  getAllCustomerReport(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/pdf',
        'Content-Type': 'application/json',
      }),
      'responseType': 'blob' as 'json'
    };
    return this.http.get<any>(mainUrl+url + "/customer" ,httpOptions);
  }

  getAllOrder(orderDate:OrderDate){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/pdf',
        'Content-Type': 'application/json',
      }),
      'responseType': 'blob' as 'json'
    };
    return this.http.post<any>(mainUrl+url + "/order",orderDate ,httpOptions);
  }
}
