import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../model/supplier";
import {Item} from "../../model/item";
import {SupplierService} from "../../service/supplier.service";
import {SupplierOrder} from "../../model/supplier-order";

@Component({
  selector: 'app-supplier-order',
  templateUrl: './supplier-order.component.html',
  styleUrls: ['./supplier-order.component.css']
})
export class SupplierOrderComponent implements OnInit {

  supplierArray : Array<Supplier> = new Array<Supplier>();
  item:Item = new Item();
  itemArray:Array<Item> = new Array<Item>();
  total: number = 0;
  supplier:Supplier = new Supplier();
  supplierOrder:SupplierOrder =new SupplierOrder();

  constructor(private supplierService:SupplierService) { }

  ngOnInit() {
    this.getAllSuppliers();
  }

  save() {
    this.supplierOrder.itemList=this.itemArray;
    this.supplierOrder.supplier=this.supplier;

    this.supplierService.supplierOrder(this.supplierOrder).subscribe(
      res=>{
        if(res === 200){
          alert("Supplier Order Success");
          this.supplierOrder =new SupplierOrder();
          this.itemArray = new Array<Item>();
          this.total =0;
        }else{
          alert("Supplier Order Failed");
        }
      },error => {
        alert("Supplier Order Failed")
      }
    );



  }

  setSupplierData(id:string) {
    this.supplier = this.supplierArray.find(value=> value.id === id);
  }

  removeItem(data: Item) {
    this.itemArray.splice(this.itemArray.indexOf(data),1)
    this.total = (this.total) - (data.price) * (data.qty);
  }

  private getAllSuppliers() {
    this.supplierService.getAll().subscribe(
      res=>{
        this.supplierArray =res;
      }
    )
  }

  Add() {

    this.itemArray.push(this.item);
    this.total = (this.total) + (this.item.price) * (this.item.qty);
    this.item =new Item();

  }
}
