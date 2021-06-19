import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-doughnut-chart',
  templateUrl: './pie-doughnut-chart.component.html',
  styleUrls: ['./pie-doughnut-chart.component.css']
})
export class PieDoughnutChartComponent implements OnInit {

  chartType:ChartType = "pie";
  chartLabels: Label[] = ['YES','NO', 'N/A']
  // chartData: SingleDataSet = [80, 15, 5];
  chartData: MultiDataSet = [
    [350, 120, 100],
    [50, 150, 120],
    [250, 130, 70]
  ]

  constructor() { }

  ngOnInit(): void {
  }

  switchChartType(event: any){
    if(this.chartType == 'pie'){
      this.chartType = 'doughnut';
    } else {
      this.chartType = 'pie';
    }
  }
  
}
