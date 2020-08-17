import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../service/report.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  constructor(private reportService:ReportService) { }

  ngOnInit() {
  }

  generate() {
    this.reportService.getAllCustomerReport().subscribe(
      res=>{
        this.downLoadFile(res, "application/pdf");
      },error => {
        alert("Generate Failed");
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
