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

  ngAfterViewInit() {

      let fields = [];
      let spacing = 1/this.values.length;
      for( let index = 0; index < this.values.length; index++){
          fields.push({endAngle: this.values[index]*6.28/100, innerRadius: index*spacing, outerRadius: (index+1)*spacing });
      }
      spacing -= .01;

    let radius = Math.min( this.width, this.height ) / 2;

    let color = {'webdev': d3.rgb(0x0f,0x0f,0x0f), 'compro': d3.rgb(0x80,0x80,0x80), 'softdev': d3.rgb(0xa9,0xa9,0xa9), 'sysanal': d3.rgb(0xf0,0xf0,0xf0)};

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
        let color = Math.floor(field['_id']*spacing*155);
        let str_color = 'rgb(' + color.toString() + ',' + color.toString() + ',' + color.toString() + ')';

        console.log(str_color);

        field.select('.arc-body')
            .attrTween('d', arcTween(arcBody))
            .style('fill', str_color);
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
