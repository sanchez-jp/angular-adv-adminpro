import { Component, Input } from '@angular/core';

import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Panceta' ];
  public data1 =  [ 10, 15, 40 ];

  public donutData1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: this.data1,
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ], }
    ]
  };
}
