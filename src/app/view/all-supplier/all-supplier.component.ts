import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item";
import {Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {SupplierService} from "../../service/supplier.service";
import {Supplier} from "../../model/supplier";

@Component({
  selector: 'app-all-supplier',
  templateUrl: './all-supplier.component.html',
  styleUrls: ['./all-supplier.component.css']
})
export class AllSupplierComponent implements OnInit {

  supplierArray:Array<Supplier> = new Array<Supplier>();

  constructor(private router: Router,private supplierService:SupplierService) { }

  ngOnInit() {
    this.getAllItem();
  }

  edit(id: string) {
    this.router.navigate(['dashboard/newsupplier',id]);
  }

  delete(id: string) {
    this.supplierService.delete(id).subscribe(
      res=>{
        if(res == 200){
          alert("Successfully Deleted")
          this.getAllItem();
        }else{
          alert("Failed to Delete")
        }
      },error => {
        alert("Failed to Delete")
      }
    );
  }

  getAllItem() {
    this.supplierService.getAll().subscribe(
      res=>{

        this.supplierArray = res;
      }
    );
  }
}
