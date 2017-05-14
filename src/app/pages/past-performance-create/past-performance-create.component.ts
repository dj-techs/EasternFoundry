import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-performance-create',
  templateUrl: './past-performance-create.component.html',
  styleUrls: ['./past-performance-create.component.css']
})
export class PastPerformanceCreateComponent implements OnInit {

  agencyType: string[] = ['Pro', 'Amature'];
  officeType: string[] = ['Pro', 'Amature'];
  clearedType: string[] = ['Pro', 'Amature'];

  ppImage: string;
  ppInputWidth: number = 300;
  employeeWidth: number = 600;
  writeWidth: number = 800;

  constructor() { }

  ngOnInit() {
  }

  uploadImage() {
    
  }

}
