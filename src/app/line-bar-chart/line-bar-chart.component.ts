import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
  ];
  chartColors: Color[] = [
    {
      backgroundColor:  'rgb(183, 252, 182, 0.5)'
    },
    {
      backgroundColor: 'rgb(245, 76, 76, 0.8)'
    }
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

  colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  colorIndex = 0;
  randomColor(event: any){
    this.chartColors[1].backgroundColor = this.colors[this.colorIndex++];
    if(this.colorIndex >= this.colors.length){
      this.colorIndex = 0;
    }
  }

  onChartClick(event: any){
    if(event.active.length > 0){
      const chart = event.active[0]._chart;
      const activePoints = chart.getElementAtEvent(event.event);
      const clickedElementIndex = activePoints[0]._index;

      const label = chart.data.labels[clickedElementIndex];
      const value1 = chart.data.datasets[0].data[clickedElementIndex];
      const value2 = chart.data.datasets[1].data[clickedElementIndex];

      console.log(clickedElementIndex, label, value1);
      console.log(clickedElementIndex, label, value2);
    }
  }

  onChartHover(event: any){
    this.chartColors[0].borderColor = "red";
  }
  

}
