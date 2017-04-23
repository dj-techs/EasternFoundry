import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availablebar',
  templateUrl: './availablebar.component.html',
  styleUrls: ['./availablebar.component.css']
})
export class AvailablebarComponent implements OnInit {

  public max: number = 7;
  public values: string[] = [
      'unavailable',
      'available',
      'unavailable',
      'unavailable',
      'available',
      'available',
      'available',
      'available'
  ];

  public dates: string[] = [
      "Feb '17",
      "Apr '17",
      "Jul '17",
      "Oct '17",
      "Jan '8",
      "Apr '17",
      "Jul '18",
      "Oct '18"
  ];

  constructor() { }

  ngOnInit() {
  }

}
