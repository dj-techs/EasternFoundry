import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Company } from '../../classes/company'
import { Product } from '../../classes/product'
import { Service } from '../../classes/service'
import { PastPerformance } from '../../classes/past-performance'

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CompanyService } from  '../../services/company.service'
import { ProductService } from '../../services/product.service'
import { ServiceService } from '../../services/service.service'
import { PastperformanceService } from '../../services/pastperformance.service'

declare var $: any;

@Component({
  selector: 'app-corporate-profile-edit',
  templateUrl: './corporate-profile-edit.component.html',
  styleUrls: ['./corporate-profile-edit.component.css'],
  providers: [ ProductService, ServiceService, PastperformanceService, CompanyService]
})
export class CorporateProfileEditComponent implements OnInit {

  currentAccount: Company = new Company()
  products: Product[] = []
  services: Service[] = []
  pastperformances: PastPerformance[] = []
  infoInputWidth: number = 350;

  agencyType: string[] = ['Pro', 'Amature'];
  officeType: string[] = ['Pro', 'Amature'];
  clearedType: string[] = ['Pro', 'Amature'];
  ppImage: string;
  ppInputWidth: number = 300;

  writeWidth: number = 800;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public location: Location,
    private companyService: CompanyService,
    private productService: ProductService,
    private serviceService: ServiceService,
    private ppService: PastperformanceService
  ) {
    if ( this.router.url !== 'corporate-profile-create' ) {
      this.companyService.getCompanyByID(this.route.snapshot.params['id']) .subscribe(result => this.currentAccount =result)
      this.currentAccount = this.companyService.getTestCompany()
      for(let i of this.currentAccount.product) {
        this.products.push(productService.getProductbyID(i.productid))
      }

      for(let i of this.currentAccount.service) {
        this.services.push(serviceService.getServicebyID(i.serviceid))
      }

      for(let i of this.currentAccount.pastperformance) {
        this.pastperformances.push(ppService.getPastPerformancebyID(i.pastperformanceid))
      }
    }
  }

  ngOnInit() {
  }

  addEmployee() {

  }

}
