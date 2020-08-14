import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/item';
import {Router} from '@angular/router';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {

  itemArray:Array<Item> = new Array<Item>();

  constructor(private router: Router,private itemService:ItemService) { }

  ngOnInit() {
    this.getAllItem();
  }



  edit(id: string) {
    this.router.navigate(['dashboard/item',id]);
  }

  delete(id: string) {
    this.itemService.delete(id).subscribe(
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
    this.itemService.getAll().subscribe(
      res=>{

        this.itemArray = res;
      }
    );
  }
}
