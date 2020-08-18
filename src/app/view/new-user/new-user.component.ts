import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  save() {
    this.userService.save(this.user).subscribe(
      res=>{
        if(res == 200){
          alert("Successfully saved user");
          this.user = new User();
        }else{
          alert("Failed saved user")
        }
      },error => {
        alert(error.error)
      }
    );
  }
}
