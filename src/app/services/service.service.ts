import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import { AuthHttp } from '../classes/auth-http'

import { Observable } from 'rxjs/Observable'
import { Service } from '../classes/service'

@Injectable()
export class ServiceService {

  authHttp: AuthHttp

  constructor(private http:Http) {
    this.authHttp = new AuthHttp(http)
  }

  getService(id: string): Observable<Service> {
    var response =  this.authHttp.get(environment.apiRoot + "/user/" + id)
    .map(response => <Service> response.json())
    return response
  }

  getServicebyID(id: string): Service {
    let temp: Service = new Service()
    temp.id = '1'
    temp.name = 'Cmoputer and Mathematical'
    temp.feature = [
      {
        title: 'Computer Programmers',
        score: 80
      },{
        title: 'Computer System Analysts',
        score: 88
      },{
        title: 'SoftwareDev Applications',
        score: 40
      },{
        title: 'Web Developers',
        score: 12
      },{
        title: 'UI Desingers',
        score: 91
      }
    ]
    temp.skills = [
      'Javascript',
      'jQuery',
      'Angular',
      'React',
      'ES5',
      'ES6',
      'ES7',
      'ES 2015',
      'HTML/DHTML',
      'AJAX/XHR',
      'ASP',
      'JSP',
      'JAVA',
      'C#',
      'Objective-c',
      'Swift 1',
      'Swift 3',
      'SQL'
    ]
    if(id == '2') {
      temp.id = '2'
      temp.name = 'MANAGEMENT'
      temp.feature = [
        {
          title: 'Scl and Cmty Service Mgrs',
          score: 90
        },{
          title: 'Admin Srvcs Mgrs',
          score: 68
        },{
          title: 'Managers, All other',
          score: 38
        }
      ]
      temp.skills = [
        'PMP',
        'Scrum'
      ]
    }
    return temp;
  }

}
