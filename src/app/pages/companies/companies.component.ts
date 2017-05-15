import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Company } from '../../classes/company'

import { CompanyService } from  '../../services/company.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = []

  constructor(
    private router: Router,
    private companyService: CompanyService
  ) {
    // this.companies = this.companyService.getCompanies()
    let cc: Company = new Company()
    cc.id = '1'
    cc.name = 'Eastern Foundry'
    cc.avatar = '../../assets/img/company-account.png'
    this.companies.push(cc)
    this.companies.push(cc)
    this.companies.push(cc)
  }

  ngOnInit() {
  }

  goTo(id: string) {
    this.router.navigate(['corporate-profile',id])
  }

}
