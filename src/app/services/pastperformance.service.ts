import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import { AuthHttp } from '../classes/auth-http'

import { Observable } from 'rxjs/Observable'
import { PastPerformance } from '../classes/past-performance'

@Injectable()
export class PastperformanceService {

  authHttp: AuthHttp

  constructor(private http:Http) {
    this.authHttp = new AuthHttp(http)
  }

  getPastPerformance(id: string): Observable<PastPerformance> {
    var response =  this.authHttp.get(environment.apiRoot + "/PastPerformance/" + id)
    .map(response => <PastPerformance> response.json())
    return response
  }

  getPastPerformancebyID(id: string): PastPerformance {
    let temp: PastPerformance = new PastPerformance()
    temp.id = '1'
    temp.title = 'Energy app Development and Deployment'
    temp.client = 'Air Force'
    temp.topic = 'App Development'
    temp.startdate = 'Jan, 2016'
    temp.enddate = 'Dec, 2016'
    temp.cleard = false
    temp.location = 'Metro DC'
    temp.FTE = '8'
    temp.value = '$4M'
    temp.rating = 'Exceptional'
    temp.description = 'Description lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog'
    temp.avatar = './assets/img/pp1.png'
    temp.employees = [
      {
        title: 'App developer1',
        stillwith: true
      },
      {
        title: 'App developer2',
        stillwith: false
      },
      {
        title: 'Web developer',
        stillwith: true
      },
      {
        title: 'Program Manager',
        stillwith: true
      }
    ]
    temp.synopsis = 'Synopsis lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog'
    temp.technical = 'Synopsis lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog'
    temp.management = 'Synopsis lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog'
    temp.other = 'Synopsis lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog lorem the quick brown fox jumps over the lazy dog'
    if(id == '2') {
      temp.id = '2'
      temp.title = 'Assessing USAF Quality Assurance Process'
      temp.topic = 'Computer System Analyics'
      temp.avatar = './assets/img/pp2.png'
    }
    return temp
  }

}
