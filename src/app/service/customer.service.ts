import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';


export const mainUrl = 'http://localhost:8080';
const url = '/customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  save(customer: Customer){
    return this.http.post<any>(mainUrl + url,customer);

  }

  getAll(){
    return this.http.get<any>(mainUrl + url);

  }


  delete(id:string){
    return this.http.delete<any>(mainUrl + url+"/"+id);
  }


  search(id:string){
    return this.http.get<any>(mainUrl + url+"/"+id);

  }
}
