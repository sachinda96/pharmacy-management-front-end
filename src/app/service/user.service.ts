import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {mainUrl} from './customer.service';

const  url = '/user';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  save(user: User) {
    return this.http.post<any>(mainUrl + url, user);
  }

  getAll() {
    return this.http.get<any>(mainUrl + url);
  }

  delete(id: string) {
    return this.http.delete<any>(mainUrl + url + '/' + id);
  }

  userRole(id: string) {
    return this.http.get<any>(mainUrl + url + '/getUserRole/' + id);
  }
}
