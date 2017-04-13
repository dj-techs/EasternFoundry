import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

   @Input() public Data: any[];
   @Input() public current: number;

  public refresh(year: number) {
    for (let index of this.Data){
      jQuery('#c-year-' + index.year).removeClass();
      $('#c-brief-' + index.year).removeClass();
      $('#c-detail-' + index.year).removeClass();

      if (index.year > year) {
        $('#c-year-' + index.year).addClass('career-year');
        $('#c-brief-' + index.year).addClass('pre');
        $('#c-brief-' + index.year).addClass('career-brief');
        $('#c-detail-' + index.year).addClass('hidden');
      } else if (index.year < year) {
        $('#c-year-' + index.year).addClass('career-year');
        $('#c-brief-' + index.year).addClass('after');
        $('#c-brief-' + index.year).addClass('career-brief');
        $('#c-detail-' + index.year).addClass('hidden');
      } else {
        $('#c-year-' + index.year).addClass('hidden');
        $('#c-brief-' + index.year).addClass('hidden');
        $('#c-detail-' + index.year).addClass('career-detail');
      }
    }
  }

}
