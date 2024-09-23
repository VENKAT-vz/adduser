import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpClient : HttpClient) { }

  addCustomer(requestBody:any) : Observable<any> {
    return this._httpClient.post("http://localhost:1133/customer/addUser",requestBody);
  }



  }


