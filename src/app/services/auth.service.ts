import { Inject ,Injectable } from '@angular/core';
import {Http, Response, RequestOptionsArgs, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

import { AuthHttp } from '../classes/auth-http'

@Injectable()
export class AuthService {

  authHttp: AuthHttp
  public current_user

  constructor(private http:Http) {
    this.authHttp = new AuthHttp(http)

    // check if the user is logged or if token is expired. If true then login
    if (!this.isLoggedIn() || this.isTokenExpired()) {
      this.doLogout()
      //this.router.navigateByUrl("/login")
    }

    // else if already logged in get the current user
    else {
      this.getUser(localStorage.getItem('userId')).subscribe(
        (result => {
            this.current_user = result.json()
            console.log(this.current_user)
        },
        err => {
        }
        )
      )
    }
  }

  doLogin(username, password): Observable<Response> {
    let body = {
      email: username,
      password: password,
      ttl: 1209600000
    }

    let opts: RequestOptionsArgs = {}
    return this.http.post(environment.apiRoot + "/Workers/login", body)
  }

  doLogout(redirect = null) {
    localStorage.removeItem('id_token')
    localStorage.removeItem('token_expiration_date')
    localStorage.removeItem('userId')
    localStorage.removeItem('user_language')

  }

  isLoggedIn() {
    return localStorage.getItem('id_token') != null
  }

  isTokenExpired() {
    let now = new Date().getTime()
    let token_expiration = <number><any>localStorage.getItem('token_expiration_date')

    return (now >= token_expiration)
  }

  getUser(userId) {
    return this.authHttp.get(environment.apiRoot + "/Workers/" + userId)
  }
}

