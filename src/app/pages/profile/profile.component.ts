import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public certificationText: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  public interestedText: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  public capaData = [
    {
      percent: 100,
      capability: 'System Analyst'
    },
    {
      percent: 50,
      capability: 'Computer Programmer'
    },
    {
      percent: 80,
      capability: 'Software Developer'
    },
    {
      percent: 60,
      capability: 'Web Developer'
    },
  ];

  public capaColors: string[] = [];
  public capaValues: number[] = [];
  public capaSkills: string[] = [
    'Javascript',
    'HTML/DHTML',
    'AJAX/XHR',
    'RegExp',
    'ASP',
    'JSP',
    'Java',
    'C#',
    'VB',
    '.NET SDK',
    'WindowsScript',
    'SQL',
    'TSQL',
    'XML',
    'Server',
    'Oracle 7x'
  ];  

  public careerData: any[] = [
    {
      'year': 2015,
      'detail':
        {
            'title': 'INDEPENDENT CONTRACTOR',
            'from': '2013-Present',
            'company': 'Independent',
            'career': 'Adding functionality to existing applications including adding new data columns to the atabase, building/rebuilding Com + Middleware components and TSQL Stored Procedure updates. Modify user interface components to accept new and changing data elements Dbugging problems that arise in production applications, such as browser compatibility issues and javascript errors.'
        }
    },
    {
      'year': 2013,
      'detail':
        {
            'title': 'INDEPENDENT CONTRACTOR',
            'from': '2013-Present',
            'company': 'QUALITY ASSURANCE',
            'career': 'Adding functionality to existing applications including adding new data columns to the atabase, building/rebuilding Com + Middleware components and TSQL Stored Procedure updates. Modify user interface components to accept new and changing data elements Dbugging problems that arise in production applications, such as browser compatibility issues and javascript errors.'
        }
    },
    {
      'year': 2008,
      'detail':
        {
            'title': 'JR AUTOMATION ANALYST',
            'from': '2013-Present',
            'company': '4stay Housing',
            'career': 'Adding functionality to existing applications including adding new data columns to the atabase, building/rebuilding Com + Middleware components and TSQL Stored Procedure updates. Modify user interface components to accept new and changing data elements Dbugging problems that arise in production applications, such as browser compatibility issues and javascript errors.'
        }
    }
  ];  

  public expColors: string[] = [];

  public expTitles: string[] = [
    'Years government service',
    'Years as contractor',
    'Proposals written',
    'Relationships'
  ];
        
  public expMainValues: number[] = [10, 30, 80, 90];
  public expSub1Values: number[] = [10, 30, 50, 60];
  public expSub2Values: number[] = [10, 30, 80, 70];

  public careerCurrent: number = 2017;

  public temp1: number = 1;
  public temp2: any[] = [
    {
      color: '#111',
      title: '111'
    },
    {
      color: '#222',
      title: '222'
    },
    {
      color: '#333',
      title: '333'
    },
    {
      color: '#444',
      title: '444'
    },
    {
      color: '#555',
      title: '555'
    },
    {
      color: '#666',
      title: '666'
    },
    {
      color: '#777',
      title: '777'
    }];
  public temp3: number = 2;
  public temp4: any[] = [
    {
      color: '#111',
      title: '111'
    },
    {
      color: '#222',
      title: '222'
    },
    {
      color: '#333',
      title: '333'
    },
    {
      color: '#444',
      title: '444'
    },
    {
      color: '#555',
      title: '555'
    },
    {
      color: '#666',
      title: '666'
    },
    {
      color: '#777',
      title: '777'
    }];

  

  public max: number = 5;
  public rate: number = 4;
  public isReadonly: boolean = false;

  public overStar: number;
  public percent: number;

  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar(): void {
    this.overStar = void 0;
  }

  public getData() {
    for (let index: number = 0 ; index < this.capaData.length ; index++ ) {
      let color = this.capaData[index].percent/100*155;
      this.capaColors[this.capaData[index].capability] = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')';
      this.capaValues[index] = this.capaData[index].percent;
    }

    for (let index: number = 0 ; index < this.expTitles.length ; index++ ) {
      let color = index/this.expTitles.length*155;
      this.expColors[this.expTitles[index]] = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')';
    }

  }

  constructor() { }

  ngOnInit() {
    this.getData();
  }

}
