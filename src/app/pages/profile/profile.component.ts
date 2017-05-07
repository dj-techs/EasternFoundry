import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../classes/user'

import { UserService } from '../../services/user.service'

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [UserService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User()
  expColors: string[] = ['rgb(0,178,255)', 'rgb(69,199,255)', 'rgb(138,220,255)', 'rgb(198,241,255)' ];
  strengthChartDatas: any[] = []
  strengthChartLabels: string[] = []
  availabilityData: any = {
    values: [],
    dates: []
  }


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location  
  ) {
    this.currentUser.id = this.route.snapshot.params['id'];
    this.currentUser = this.userService.getUserbyID(this.currentUser.id)
    let index: number = 0
    this.availabilityData.values = []
    this.availabilityData.dates = []
    for (let exp of this.currentUser.agencyexperience.main.data) {
      let color = index/this.currentUser.agencyexperience.main.data.length*155
      color = Math.floor(color)
      this.expColors[exp.title] = this.expColors[index++]
    }
    let temp: number[] = []
    for(let index of this.currentUser.strength) {
      this.strengthChartLabels.push(index.skill)
      temp.push(index.score)
    }    
    for(let index of this.currentUser.availability) {
      this.availabilityData.dates.push(index.date)
      this.availabilityData.values.push(index.available)
    }
    this.strengthChartDatas.push({data: temp, label: 'Strength'})
  }



  ngOnInit() {
  }

  getCapaChartValues(): number[] {
    let temp: number[] = []
    for (let index of this.currentUser.capability) {
      temp.push(index.score)
    }
    return temp
  }

  getCapaChartColor(score: number): string {
    let temp: string
    var color: number = score/100*155
    color = Math.floor(color)
    temp = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')'
    return temp
  }

  expMainValues(): number[] {
    let temp: number[] = []
    for( let exp of this.currentUser.agencyexperience.main.data) {
      temp.push(exp.score)
    }
    return temp
  }

  expSub1Values(): number[] {
    let temp: number[] = []
    for( let exp of this.currentUser.agencyexperience.office1.data) {
      temp.push(exp.score)
    }
    return temp
  }

  expSub2Values(): number[] {
    let temp: number[] = []
    for( let exp of this.currentUser.agencyexperience.office2.data) {
      temp.push(exp.score)
    }
    return temp
  }

  currentYear() {
    let year = new Date().getFullYear()
    return year
  }

  back() {
    this.location.back()
  }
}
