import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService:CustomerService,private  routerActive:ActivatedRoute) { }

  ngOnInit() {
    this.routerActive.params.subscribe(params =>{
        if(params.id != null || params.id != undefined){
          this.get(params.id);
        }
    });
  }

  save(){
    console.log(this.customer);
    this.customerService.save(this.customer).subscribe(
      res=>{
        console.log(res)
        if(res == 200){
          alert("Customer Save Success");
          this.customer = new Customer();
        }else{
          alert("Customer Save Failed");
        }
      },error => {
        console.log(error)
        alert("Customer Save Failed")
      }
    );
  }

  get(id: any) {
    this.customerService.search(id).subscribe(
      res=>{
        this.customer = res;
        // @ts-ignore
        this.customer.birthDay = new Date(this.customer.birthDay).toISOString().split('T')[0]
      }
    );
  }
}
