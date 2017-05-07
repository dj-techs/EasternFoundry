import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import { Observable } from 'rxjs/Observable'
import { Company } from '../classes/company'
import {AuthHttp} from '../classes/auth-http'

@Injectable()
export class CompanyService {
  authHttp: AuthHttp

  constructor(private http:Http) {
    this.authHttp = new AuthHttp(http)
  }

  getCompanyByID(id: string): Observable<Company[]> {
    var response =  this.authHttp.get(environment.apiRoot + "/company/" + id )
    .map(response => <[Company]> response.json())
    return response
  }

}
