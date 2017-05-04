import { Inject ,Injectable } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment'

import { AuthHttp } from '../classes/auth-http'
import { User } from '../classes/user'
import { UserService } from '../services/user.service'

@Injectable()
export class AuthService {

  loginResponse: {
    id: string,
    ttl: number,
    created: string,
    userId: string
  }

  authHttp: AuthHttp
  public current_user

  constructor(
    private http:Http,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {
    this.authHttp = new AuthHttp(http)

    // check if the user is logged or if token is expired. If true then login
    if (!this.isLoggedIn() || this.isTokenExpired()) {
      this.doLogout()
      this.router.navigateByUrl("/login")
    } else { // else if already logged in go to corporate profile page
      this.router.navigateByUrl("/login")
    }
  }

  doLogin(username, password) {
    let body = {
      email: username,
      password: password,
      ttl: 1209600000
    }

    let opts: RequestOptionsArgs = {}
    this.http.post(environment.apiRoot + "/users/login", body).subscribe(
        (result => {
          if (result.status == 200) { //login OK
            this.loginResponse = result.json()

            //save token info into localStorage
            localStorage.setItem('id_token', this.loginResponse.id)
            let expirationDays = this.loginResponse.ttl / 60 / 60 / 24
            let tokenExpirationDate = new Date()
            let tokenExpirationTime = tokenExpirationDate.setDate(tokenExpirationDate.getDate() + expirationDays)
            localStorage.setItem('token_expiration_date', tokenExpirationTime.toString())
            localStorage.setItem('userId', this.loginResponse.userId)            
          }
        }),
        (err => {
          if (err.status == 401) { //invalid username or password
            //show warning
            console.log("I'm out")
          }
        })
    )
  }

  doLogout(redirect = null) {
    localStorage.removeItem('id_token')
    localStorage.removeItem('token_expiration_date')
    localStorage.removeItem('userId')
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
    return this.authHttp.get(environment.apiRoot + "/users/" + userId)
  }
}

