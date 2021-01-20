import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";
import {mainUrl} from "./customer.service";
import {Supplier} from "../model/supplier";
import {SupplierOrder} from "../model/supplier-order";


const url = '/supplier';
@Injectable()
export class SupplierService {

  constructor(private http: HttpClient) { }

  save(supplier: Supplier){
    return this.http.post<any>(mainUrl + url,supplier);

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

  supplierOrder(supplierOrder: SupplierOrder){
    return this.http.post<any>(mainUrl + url+"/order",supplierOrder);

  }
}
