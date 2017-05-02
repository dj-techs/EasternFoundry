import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../classes/user'
import { Product } from '../../classes/product'
import { PastPerformance } from '../../classes/past-performance'
import { Company } from '../../classes/company'
import { Service } from '../../classes/service'

import { UserService } from '../../services/user.service'
import { ProductService } from '../../services/product.service'
import { ServiceService } from '../../services/service.service'
import { PastperformanceService } from '../../services/pastperformance.service'

declare var $: any;
declare var Swiper: any;

@Component({
  selector: 'app-corporate-profile',
  providers: [UserService, ProductService, ServiceService, PastperformanceService],
  templateUrl: './corporate-profile.component.html',
  styleUrls: ['./corporate-profile.component.css']
})
export class CorporateProfileComponent implements OnInit, AfterViewInit {

  currentAccount: Company = new Company()
  users: User[] = []
  products: Product[] = []
  services: Service[] = []
  pastperformances: PastPerformance[] = []
  productChartData: number[] = []
  productChartLabels: string[] = []
  serviceChartColors: string[] = []
  serviceChartValues: string[] = []
  serviceChartLabels: string[] = []
  currentPP: number = 0
  CQAC:string[] = []

  currentTab: boolean = true

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private serviceService: ServiceService,
    private ppService: PastperformanceService
  ) {
    console.log('initializing');
    this.currentAccount.id = '1'
    this.currentAccount.name = 'Eastern Foundry'
    this.currentAccount.email = 'eastern@foundry.com'
    this.currentAccount.avatar = '../../assets/img/company-account.png'
    this.currentAccount.contactnumber = '(202) 725-7483'
    this.currentAccount.address = 'Washington, DC'
    this.currentAccount.information_accuracy = 5
    this.currentAccount.lastupdated = 'Dec, 2016'
    this.currentAccount.leadership = [
      {userid: '1'},
      {userid: '2'}
    ]
    this.currentAccount.product = [
      {productid: '1'},
      {productid: '2'}
    ]
    this.currentAccount.service = [
      {serviceid: '1'},
      {serviceid: '2'}
    ]
    this.currentAccount.pastperformance = [
      {pastperformanceid: '1'},
      {pastperformanceid: '2'}
    ]
    this.currentAccount.agencyexperience = [
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
    this.currentAccount.vehicles = [
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
    this.currentAccount.schedule = [
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

    for (let i of this.currentAccount.leadership) {
      this.users.push(userService.getUserbyID(i.userid))
    }

    for(let i of this.currentAccount.product) {
      this.products.push(productService.getProductbyID(i.productid))
    }

    for(let i of this.currentAccount.service) {
      this.services.push(serviceService.getServicebyID(i.serviceid))
    }

    for(let i of this.currentAccount.pastperformance) {
      this.pastperformances.push(ppService.getPastPerformancebyID(i.pastperformanceid))
    }

    for(let i of this.users) {
      for(let j of i.certificate) {
        this.CQAC.push('Degree: ' + j.degree + ', DateEarned: ' + j.dateEarned)
      }
      for(let j of i.award) {
        this.CQAC.push('Awarded: ' + j)
      }
      for(let j of i.clearance) {
        this.CQAC.push('Type: ' + j.type + ', Awarded: ' + j.awarded + ', Expriation: ' + j.expiration)
      }
    }

    console.log(this.pastperformances);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if($('.swiper-container').width() > 450) {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      });
    } else if($('.swiper-container').width() > 400) {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      });
    } else {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
      });
    }
  }

  showService() {
    this.currentTab = false
  }

  showProduct() {
    this.currentTab = true
  }

  getServiceChartValue(id: string): number[] {
    let temp: number[] = []
    for(let i of this.services) {
      if(i.id == id) {
        for(let j of i.feature) {
          temp.push(j.score)
        }
      }
    }
    return temp
  }

  getServiceChartColor(score: number): string {
    let temp: string
    var color: number = score/100*155
    temp = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')'
    return temp
  }

}
