import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../model/supplier";
import {Item} from "../../model/item";
import {ActivatedRoute} from "@angular/router";
import {SupplierService} from "../../service/supplier.service";

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();

  constructor(private  routerActive:ActivatedRoute,private supplierService:SupplierService) { }

  ngOnInit() {
    this.routerActive.params.subscribe(params =>{
      if(params.id != null || params.id != undefined){
        this.get(params.id);
      }
    });
  }

  save() {
    // @ts-ignore
    this.supplierService.save(this.supplier).subscribe(
      res=>{
        if(res == 200){
          alert("Supplier Save Success");
          this.supplier = new Supplier();
        }else{
          alert("Supplier Save Failed");
        }
      },error => {
        alert("Supplier Save Failed")
      }
    );
  }

  get(id: any) {
    this.supplierService.search(id).subscribe(
      res=>{
        this.supplier = res;
      }
    );
  }
}
