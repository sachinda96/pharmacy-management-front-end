import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../../model/login';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:Login = new Login();

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.firstUser();
  }

  login(){
    this.authService.login(this.loginData).subscribe(
      res=>{
        sessionStorage.setItem("token",res);
        this.router.navigate(['dashboard']);
      },error => {

        alert(error.error);
      }
    );
  }

   firstUser() {
    this.authService.firstUser().subscribe();
  }
}
