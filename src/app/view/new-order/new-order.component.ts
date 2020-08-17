import {Component, ElementRef, OnInit} from '@angular/core';
import {ItemService} from '../../service/item.service';
import {Item} from '../../model/item';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {FormControl} from '@angular/forms';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  isNewCus: boolean =false;
  isOldCus: boolean = false;
  itemArray:Array<Item> = new Array<Item>();
  customerArray:Array<Customer> = new Array<Customer>();
  customer:Customer = new Customer();
  item:Item= new Item();
  validQty: number =0;
  customerName: FormControl;
  order:Order = new Order();
  orderArray: Array<Order>  = new Array<Order>();
  total : number = 0;

  constructor(private itemService:ItemService,private customerService:CustomerService,private elem:ElementRef,private orderService:OrderService) { }

  ngOnInit() {
    this.isNewCus = true;
    this.getAllItem();
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAll().subscribe(
      res=>{
        this.customerArray = res;
      }
    );
  }

  getAllItem(){
    this.itemService.getAll().subscribe(
      res=>{
        this.itemArray = res;
      }
    );
  }

  save() {
    if(this.orderArray.length == 0){
      alert("Please add Items");
    }else {
      this.orderService.placeOrder(this.orderArray).subscribe(
        res=>{
          if(res == 200){
            alert("Successfully Place Order");
            this.getAllCustomer();
            this.getAllItem();
            this.orderArray = new Array<Order>();
            this.item = new Item();
            this.customer = new Customer();
            this.elem.nativeElement.querySelector('#customerName').value = "";
          }else{

            alert("Fail to Place Order");
          }
        },error => {
          alert("Fail to Place Order")
        }
      );
    }

  }

  setCustomerData(value:String) {

    if(value === "NEW"){
      this.isOldCus =false;
      this.isNewCus = true;
    }else{
      this.isNewCus =false;
      this.isOldCus = true;
    }
  }

  setCustomer(value: string) {
    this.customer = new Customer();
    this.customer = this.customerArray.find(e=> e.id == value);
  }

  add() {

  if(this.item.qty> this.validQty){
    alert("You entered qty greater than available qty");
  }else {
    if(this.isNewCus){
      let customerName = this.elem.nativeElement.querySelector('#customerName').value
      this.customer = new Customer();
      this.customer.fullName = customerName;
    }


    this.total = (this.total) + (this.item.price) * (this.item.qty);
    this.order = new Order;
    this.order.qty = this.item.qty;
    this.order.customerId = this.customer.id;
    this.order.customerName = this.customer.fullName;
    this.order.itemId = this.item.id;
    this.order.itemName = this.item.name;
    this.order.price = this.item.price;

    this.orderArray.push(this.order);
  }





  }

  setItemData(value: any) {
    this.item = new Item();
    this.item =this.itemArray.find(e=> e.id == value);
    this.validQty = this.item.qty;

  }


  removeItem(data: Order) {

    var val = (data.price) * (data.qty)
    this.total = this.total - val;
    this.orderArray.splice(this.orderArray.indexOf(data),1);
  }
}
