import { Component, OnInit } from '@angular/core';

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

  public barChartLabels: string[] = [
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

  public barChartData: any[] = [
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
    
  }

}
