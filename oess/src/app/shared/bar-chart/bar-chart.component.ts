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
    
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    title: {
      text: 'Org Level Performance'
    },
    
    xAxis: {
      categories: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6']
    },

    series: [
      // {
      //   type: 'column',
      //   colorByPoint: true,
      //   data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
      //   showInLegend: false
      // }
      {
        name: 'Share',
        data: [
            { name: 'Chrome', y: 61.41 },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ]
      }
    ] 
    
  }; 


}
