import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';
import {mainUrl} from './customer.service';
import {Order} from '../model/order';

const url = '/order';
@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  placeOrder(orderList: Array<Order>) {
    return this.http.post<any>(mainUrl + url, orderList);

  }
}
