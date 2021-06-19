import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-line-bar-chart',
  templateUrl: './line-bar-chart.component.html',
  styleUrls: ['./line-bar-chart.component.css']
})
export class LineBarChartComponent implements OnInit {

  chartType:ChartType = "line";
  chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  chartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 85, 72, 78, 75, 88, 90], label: 'YES' },
    { data: [15, 28, 22, 25, 23, 25, 15, 28, 22, 25, 12, 10], label: 'NO' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  switchChartType(event: any){
    if(this.chartType == 'bar'){
      this.chartType = 'line';
    } else {
      this.chartType = 'bar';
    }
  }
  

}
