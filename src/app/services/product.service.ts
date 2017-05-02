import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import { AuthHttp } from '../classes/auth-http'

import { Observable } from 'rxjs/Observable'
import { Product } from '../classes/product'

@Injectable()
export class ProductService {

  authHttp: AuthHttp

  constructor(private http:Http) {
    this.authHttp = new AuthHttp(http)
  }

  getProduct(id: string): Observable<Product> {
    var response =  this.authHttp.get(environment.apiRoot + "/product/" + id)
    .map(response => <Product> response.json())
    return response
  }

  getProductbyID(id: string): Product {
    let temp: Product = new Product()
    temp.id = '1'
    temp.name = 'product 1'
    temp.feature =  {
        name: [
          'feature 1',
          'feature 2',
          'feature 3',
          'feature 4',
          'feature 5'
        ],
        score: [
          10,20,30,18,60
        ]
      }
    temp.description = 'the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog  the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog'
    temp.moreinfolink = ''
    temp.viewdemolink = ''
    temp.customization = true
    temp.training = false
    temp.maintenance = true
    temp.customers = {
      defense: [
        {
          avatar: './assets/img/customer1.png',
          name: 'customer 1'
        },{
          avatar: './assets/img/customer2.png',
          name: 'customer 2'
        },{
          avatar: './assets/img/customer3.png',
          name: 'customer 3'
        },{
          avatar: './assets/img/customer4.png',
          name: 'customer 4'
        }
      ],
      civilian: [
        {
          avatar: './assets/img/customer5.png',
          name: 'customer 1'
        },{
          avatar: './assets/img/customer2.png',
          name: 'customer 2'
        },{
          avatar: './assets/img/customer3.png',
          name: 'customer 3'
        }
      ],
      commercial : [
        {
          avatar: './assets/img/customer6.png',
          name: 'customer 1'
        },{
          avatar: './assets/img/customer2.png',
          name: 'customer 2'
        }
      ]
    }
    if(id == '2') {
      temp.id = '2'
      temp.name = 'product 2'
      temp.feature = {
        name: [
          'feature 1',
          'feature 2',
          'feature 3',
          'feature 4',
          'feature 5',
          'feature 6',
          'feature 7',
          'feature 8',
          'feature 9'
        ],
        score: [
          50,100,10,20,30,18,44,60,5
        ]
      }
      temp.description = 'Second the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog the quick brown fox jumps over lazy dog'
      temp.customers = {
        defense: [
          {
            avatar: './assets/img/customer2.png',
            name: 'customer 1'
          },{
            avatar: './assets/img/customer6.png',
            name: 'customer 2'
          },{
            avatar: './assets/img/customer4.png',
            name: 'customer 3'
          },{
            avatar: './assets/img/customer5.png',
            name: 'customer 4'
          }
        ],
        civilian: [
          {
            avatar: './assets/img/customer5.png',
            name: 'customer 1'
          },{
            avatar: './assets/img/customer2.png',
            name: 'customer 2'
          }
        ],
        commercial : [
          {
            avatar: './assets/img/customer6.png',
            name: 'customer 1'
          },{
            avatar: './assets/img/customer2.png',
            name: 'customer 2'
          }
        ]
      }
    }
    return temp
  }

}
