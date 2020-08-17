import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  totalOrders : any = 0;
  totalItem: any = 0;
  totalCustomer: any = 0;
  totalUser: any = 0;
  totalItemNoValue: any = 0;
  totalRemovedCustomer: any = 0;
  totalRemovedItems: any = 0;
  topOrdersArray:Array<any> = new Array<any>();

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getAllMainData();
  }


  getAllMainData() {
    this.dashboardService.totalOrders().subscribe(
      res=>{
        this.totalOrders = res;
      }
    );

    this.dashboardService.totalItems().subscribe(
      res=>{
        this.totalItem =res;
      }
    );

    this.dashboardService.totalCustomers().subscribe(
      res=>{
        this.totalCustomer= res;
      }
    );

    this.dashboardService.totalUser().subscribe(
      res=>{
        this.totalUser = res;
      }
    );

    this.dashboardService.totalItemNoValue().subscribe(
      res=>{
        this.totalItemNoValue = res;
      }
    );

    this.dashboardService.totalRemovedCustomer().subscribe(
      res=>{
        this.totalRemovedCustomer = res;
      }
    );

    this.dashboardService.totalRemovedItems().subscribe(
      res=>{
        this.totalRemovedItems = res;
      }
    );

    this.dashboardService.topSevenOrders().subscribe(
      res=>{
        this.topOrdersArray= res;
      }
    );

  }
}
