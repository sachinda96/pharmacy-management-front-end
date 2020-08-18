import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  userArray:Array<any> = new Array<any>();

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.getAllUser();
  }

   getAllUser() {
    this.userService.getAll().subscribe(
      res=>{
        this.userArray= res;

      }
    );
  }

  delete(id: any) {
    this.userService.delete(id).subscribe(
      res=>{
        if(res == 200){
          alert("successfully deleted user");
          this.getAllUser();
        }else{
          alert("Failed to delete user");
        }
      },error => {
        alert(error.error)
      }
    );
  }
}
