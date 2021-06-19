import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineBarChartComponent } from './line-bar-chart/line-bar-chart.component';
import { PieDoughnutChartComponent } from './pie-doughnut-chart/pie-doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

const routes: Routes = [
  { path: 'line-bar-chart', component: LineBarChartComponent },
  { path: 'pie-dougnut-chart', component: PieDoughnutChartComponent },
  { path: 'radar-chart', component: RadarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
