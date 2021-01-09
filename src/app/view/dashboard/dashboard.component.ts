import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
import {Router} from '@angular/router';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin : boolean =false;

  constructor(private route:Router,private userService:UserService) { }

  ngOnInit() {

    this.getUserRole();

  }


  logout() {
    sessionStorage.removeItem("token");
    this.route.navigate(['']);
  }

  private getUserRole() {

    this.userService.userRole(sessionStorage.getItem("token")).subscribe(
      res=>{
        console.log(res)
        if(res.role === 'admin'){
          this.isAdmin = true;
        }

      }
    );


  }
}
