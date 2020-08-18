import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../model/login';
import {mainUrl} from './customer.service';

const url="/login";
const userUrl="/user"
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData:Login){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/pdf',
        'Content-Type': 'application/json',
      }),
      'responseType': 'text' as 'json'
    };
    return this.http.post<any>(mainUrl+url,loginData,httpOptions);
  }

  firstUser(){
    return this.http.get<any>(mainUrl+userUrl+"/firstUser");
  }

  get isAuthenticated(){
    if (sessionStorage.getItem("token")) {
      return true;
    }
    return false;
  }

}
