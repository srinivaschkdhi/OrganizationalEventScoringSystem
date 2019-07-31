import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Highcharts = Highcharts; 

  chartOptions = { 

    title: {
      text: 'Org Level Performance'
    },
    
    xAxis: {
      categories: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6']
    },

    series: [{
      type: 'column',
      colorByPoint: true,
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
      showInLegend: false
    }] 
    
  }; 


}
