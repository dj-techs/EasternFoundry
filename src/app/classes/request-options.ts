import {Inject, Injectable} from '@angular/core'
import {BaseRequestOptions, Headers} from '@angular/http'

@Injectable()
export class RequestOptions extends BaseRequestOptions {
  headers: Headers

  constructor() {
    super()
    this.headers.set('Content-Type', 'application/json')
  }
}
