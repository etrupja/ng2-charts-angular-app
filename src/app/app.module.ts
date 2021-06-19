import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineBarChartComponent } from './line-bar-chart/line-bar-chart.component';
import { PieDoughnutChartComponent } from './pie-doughnut-chart/pie-doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineBarChartComponent,
    PieDoughnutChartComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
