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

  getComapnies(): Observable<Company[]> {
    var response =  this.authHttp.get(environment.apiRoot + "company/" )
    .map(response => <[Company]> response.json())
    return response
  }

  getCompanyByID(id: string): Observable<Company> {
    var response =  this.authHttp.get(environment.apiRoot + "company/" + id )
    .map(response => <Company> response.json())
    return response
  }

  getTestCompany(): Company {
    let temp: Company = new Company()
    temp.id = '1'
    temp.name = 'Eastern Foundry'
    temp.email = 'eastern@foundry.com'
    temp.avatar = '../../assets/img/company-account.png'
    temp.contactnumber = '(202) 725-7483'
    temp.address = 'Washington, DC'
    temp.information_accuracy = 5
    temp.lastupdated = 'Dec, 2016'
    temp.leadership = [
      {userid: '1'},
      {userid: '2'}
    ]
    temp.product = [
      {productid: '1'},
      {productid: '2'}
    ]
    temp.service = [
      {serviceid: '1'},
      {serviceid: '2'}
    ]
    temp.pastperformance = [
      {pastperformanceid: '1'},
      {pastperformanceid: '2'}
    ]
    temp.agencyexperience = [
      {
        title: 'Years Agency experience',
        score: 90
      },
      {
        title: '$ (M) of agency revenue',
        score: 48
      },
      {
        title: 'Proposals written',
        score: 100
      },
      {
        title: 'Relationships',
        score: 30
      }
    ]
    temp.vehicles = [
      {
        type: 'Vehicle type 1',
        quantity: 3
      },
      {
        type: 'Vehicle type 2',
        quantity: 6
      },
      {
        type: 'Vehicle type 3',
        quantity: 10
      }
    ]
    temp.schedule = [
      {
        date: 'Dec, 2016',
        content: 'Schedule 1'
      },
      {
        date: 'Jan, 2017',
        content: 'Schedule 2'
      },
      {
        date: 'May, 2017',
        content: 'Schedule 3'
      }
    ]
    return temp
  }

}
