import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../service/report.service';
import {OrderDate} from '../../model/order-date';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent implements OnInit {

  orderDate : OrderDate = new OrderDate();

  constructor(private reportService:ReportService) { }

  ngOnInit() {}

  generate() {
    this.reportService.getAllOrder(this.orderDate).subscribe(
      res=>{
        this.downLoadFile(res, "application/pdf");
      },error => {
        alert("No any order in selected days");
      }
    );

  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
