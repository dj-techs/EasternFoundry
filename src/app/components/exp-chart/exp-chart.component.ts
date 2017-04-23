import { Component, OnInit, AfterViewInit , Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-exp-chart',
  templateUrl: './exp-chart.component.html',
  styleUrls: ['./exp-chart.component.css']
})
export class ExpChartComponent implements AfterViewInit {

@Input() public width: number;
@Input() public height: number;
@Input() public divID: string;
@Input() public values: number[];

    public names: string[] = ['Years government service', 'Proposals written','Years as contractor','Rleationships'];

    constructor() { }

  public ngAfterViewInit() {

      let fields = [];
      let spacing = 0.3;
      let spacing2 = 1/this.values.length;

      for( let index = 0; index < this.values.length; index++){
          fields.push({innerRadius: 0.2, startAngle:spacing2*index, endAngle: this.values[index]>50?spacing2*index+spacing2:spacing2*index+spacing2*this.values[index]/50, text: this.names[index%4]});
      }
      for( let index = 0; index < this.values.length; index++){
          fields.push({innerRadius: 0.5, startAngle:spacing2*index, endAngle: this.values[index]>50?spacing2*index+spacing2*(this.values[index]-50)/50:spacing2*index, text: this.names[index%4]});
      }

    let radius = Math.min(this.width, this.height) / 2;

    let arcBody = d3.arc()
        .startAngle(function (d){ return d.startAngle * 2 * Math.PI; })
        .endAngle(function(d) { return d.endAngle * 2 * Math.PI; })
        .innerRadius(function(d) { return d.innerRadius * radius ; })
        .outerRadius(function(d) { return (d.innerRadius + 0.3) * radius; })

    let svg = d3.select('#' + this.divID).append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')')
        .attr('border','1px solid #fff');

    let field = svg.selectAll('g')
        .data(fields)
        .enter().append('g');

    field.append('path')
        .attr('class', 'arc-body');

    tick();

    d3.select(self.frameElement).style('height', this.height + 'px');

    function tick() {
    if (!document.hidden){
        field
          .data(fields)
          .each(fieldTransition);
        }
    }

    function fieldTransition() {
        let field = d3.select(this).transition();

        let color: string[] = ['rgb(0,178,255)', 'rgb(23,185,255)', 'rgb(46,192,255)', 'rgb(69,199,255)', 'rgb(92,206,255)', 'rgb(115,213,255)'];

        field.select('.arc-body')
            .attrTween('d', arcTween(arcBody))
            .style('stroke-width', 2)
            .style('stroke', 'white')
            .style('fill', color[field['_id']%6]);
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
