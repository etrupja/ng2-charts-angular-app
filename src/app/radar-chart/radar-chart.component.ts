import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  chartType:ChartType = "radar";
  chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  chartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 85, 72, 78, 75, 88, 90], label: 'YES' },
    { data: [15, 28, 22, 25, 23, 25, 15, 28, 22, 25, 12, 10], label: 'NO' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
