import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/item';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../service/item.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:Item = new Item();

  constructor(private  routerActive:ActivatedRoute,private itemService:ItemService) { }

  ngOnInit() {
    this.routerActive.params.subscribe(params =>{
      if(params.id != null || params.id != undefined){
        this.get(params.id);
      }
    });
  }

  save() {
    // @ts-ignore
    this.item.price = this.item.price.toFixed(2);
    this.itemService.save(this.item).subscribe(
      res=>{
        if(res == 200){
          alert("Item Save Success");
          this.item = new Item();
        }else{
          alert("Item Save Failed");
        }
      },error => {
        alert("Item Save Failed")
      }
    );
  }

  get(id: any) {
    this.itemService.search(id).subscribe(
      res=>{

        this.item = res;
        // @ts-ignore
        this.item.expDate = new Date(this.item.expDate).toISOString().split('T')[0];
        // @ts-ignore
        this.item.price = this.item.price.toFixed(2);
      }
    );
  }
}
