import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { PastPerformance } from '../../classes/past-performance'

import { PastperformanceService } from '../../services/pastperformance.service'

declare var $: any

@Component({
  selector: 'app-past-performance',
  templateUrl: './past-performance.component.html',
  providers: [PastperformanceService],
  styleUrls: ['./past-performance.component.css']
})
export class PastPerformanceComponent implements OnInit {

  currentPastPerformance: PastPerformance = new PastPerformance()

  public performanceTitle: string = ''
  public agencyType: string[] = ['Pro', 'Amature']
  public officeType: string[] = ['Pro', 'Amature']
  public clearedType: string[] = ['Pro', 'Amature']
  public ppImage: string
  public ppInputWidth: number = 300
  public employeeWidth: number = 600
  public writeWidth: number = 800
  public clientName: string = 'Air Force: 1st Fighter Wing'

  constructor(
    private pastPerformanceService: PastperformanceService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { 
    this.currentPastPerformance.id = this.route.snapshot.params['id']
    this.currentPastPerformance = this.pastPerformanceService.getPastPerformancebyID(this.currentPastPerformance.id)
    
  }

  ngOnInit() {
  }

}
