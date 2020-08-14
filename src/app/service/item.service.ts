import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {mainUrl} from './customer.service';
import {Item} from '../model/item';


const url = '/item';
@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  save(item: Item){
    return this.http.post<any>(mainUrl + url,item);

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
