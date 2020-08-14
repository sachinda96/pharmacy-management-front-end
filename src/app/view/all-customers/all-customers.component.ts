import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  customerArray:Array<Customer> = new Array<Customer>();

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll().subscribe(
      res=>{
        this.customerArray = res;
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['dashboard/newcust',id]);
  }

  delete(id: string) {
    this.customerService.delete(id).subscribe(
      res=>{
        if(res == 200){
          alert("Successfully Deleted")
          this.getAll();
        }else{
          alert("Failed to Delete")
        }
      },error => {
        alert("Failed to Delete")
      }
    );
  }
}
