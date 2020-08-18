import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orderArray:Array<any> = new Array<any>();

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.getAllOrders();
  }

   getAllOrders() {
      this.orderService.getAllOrders().subscribe(
        res=>{
          this.orderArray =res;
        }
      );
  }
}
