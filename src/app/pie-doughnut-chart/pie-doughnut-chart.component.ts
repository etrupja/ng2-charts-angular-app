import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-doughnut-chart',
  templateUrl: './pie-doughnut-chart.component.html',
  styleUrls: ['./pie-doughnut-chart.component.css']
})
export class PieDoughnutChartComponent implements OnInit {

  chartType:ChartType = "pie";
  chartLabels: Label[] = ['YES','NO', 'N/A']
  chartData: SingleDataSet = [80, 15, 5];

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
