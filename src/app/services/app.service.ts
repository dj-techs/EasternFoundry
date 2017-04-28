import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import { Observable } from 'rxjs/Observable'
import { User } from '../classes/user'
import { Company } from '../classes/company'
import { Product } from '../classes/product'
import { Service } from '../classes/service'
import { PastPerformance } from '../classes/past-performance'


import { AuthHttp } from '../classes/auth-http'



@Injectable()
export class AppService {

  authHttp: AuthHttp

    constructor(private http:Http) {
      this.authHttp = new AuthHttp(http)
    }

    getCompany(id: string): Observable<Company[]> {
      var response =  this.authHttp.get(environment.apiRoot + "/company/" + id)
      .map(response => <[Company]> response.json())
      return response
    }

    getUser(id: string): Observable<User[]> {
      var response =  this.authHttp.get(environment.apiRoot + "/user/" + id)
      .map(response => <[User]> response.json())
      return response
    }

    getPastPerformance(id: string): Observable<PastPerformance[]> {
      var response =  this.authHttp.get(environment.apiRoot + "/past-performance/" + id)
      .map(response => <[PastPerformance]> response.json())
      return response
    }

    getProduct(id: string): Observable<Product[]> {
      var response =  this.authHttp.get(environment.apiRoot + "/product/" + id)
      .map(response => <[Product]> response.json())
      return response
    }

    getService(id: string): Observable<Service[]> {
      var response =  this.authHttp.get(environment.apiRoot + "/service/" + id)
      .map(response => <[Service]> response.json())
      return response
    }
}
