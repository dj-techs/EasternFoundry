import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-comment-box',
  templateUrl: './color-comment-box.component.html',
  styleUrls: ['./color-comment-box.component.css']
})
export class ColorCommentBoxComponent implements OnInit {

@Input() public color: string = "#fff";
@Input() public text: string = 'Developer';

  constructor() { }

  ngOnInit() {
  }

}
