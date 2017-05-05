import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

@Input() public barChartLabels: string[] = [
    'Deductive Reasoning',
    'Oral Expression',
    'Written Comprehension',
    'Mathematical Reasoning',
    'Problem Sensitivity',
    'Manual Dexterity',
    'Originality',
    'Written Expression',
    'Inductive Reasoning',
    'finger Dexterity',
    'Information Ordering'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

@Input()  public barChartData: any[] = [
    {data: [100, 30, 20, 20, 20, 18, 17, 5, 8, 6, 8], label: 'Strength'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    console.log(this.barChartLabels)
  }

}
