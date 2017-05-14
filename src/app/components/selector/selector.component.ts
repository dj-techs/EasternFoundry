import { Component, OnInit, Input } from '@angular/core';
import { BsDropdownConfig } from 'ng2-bootstrap/dropdown';

declare var $: any;

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  
  @Input() public items: string[];
  @Input() public width: number;

  public value: string = 'Please select';

  constructor() { }

  ngOnInit() {  }


  public Select (str: string) {
    this.value = str;
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public getWidth(): string {
    return '' + this.width + 'px';
  }

}
