import { Component, OnInit, AfterViewInit , Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bent-bars-chart',
  templateUrl: './bent-bars-chart.component.html',
  styleUrls: ['./bent-bars-chart.component.css']
})
export class BentBarsChartComponent implements AfterViewInit {

@Input() width: number;
@Input() height: number;
@Input() divID: string;
@Input() values: number[];

  constructor() { }
  colors: string[] = []
  colorindex: number = 0

  ngAfterViewInit() {

      let _this = this;

      let fields = []
      let spacing = 1/this.values.length
      for( let index = 0; index < this.values.length; index++){
          fields.push({endAngle: this.values[index]*6.28/100, innerRadius: index*spacing, outerRadius: (index+1)*spacing })
          let color = Math.floor(this.values[index]/100*155)
          let str_color = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')'
          this.colors.push(str_color);
      }
      spacing -= .01

    let radius = Math.min( this.width, this.height ) / 2;

    let arcBody = d3.arc()
        .startAngle(0)
        .endAngle(function(d) { return d.endAngle; })
        .innerRadius(function(d) { return d.innerRadius * radius; })
        .outerRadius(function(d) { return d.outerRadius * radius; })
        .cornerRadius(6);

    let svg = d3.select('#' + this.divID).append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

    let field = svg.selectAll('g')
        .data(fields)
        .enter().append('g');

    field.append('path')
        .attr('class', 'arc-body');

    tick();

    d3.select(self.frameElement).style('height', this.height + 'px');

    function tick() {
        if (!document.hidden){
            field.each(fieldTransition);
        } 
    }

    function fieldTransition() {
        let field = d3.select(this).transition();

        field.select('.arc-body')
            .attrTween('d', arcTween(arcBody))
            .style('fill', _this.colors[_this.colorindex++] )
        
        if(_this.colorindex >= _this.values.length) {
            _this.colorindex = 0
        }
    }

    function arcTween(arc) {
        return function(d) {
            let i = d3.interpolateNumber(d.previousValue, d.value);
            return function(t) {
            d.value = i(t);
            return arc(d);
            };
        };
    }
    
  }
}
