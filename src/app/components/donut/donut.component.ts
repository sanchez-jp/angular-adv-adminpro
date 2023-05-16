import { Component, Input } from '@angular/core';

import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'Sin título';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'label1', 'Label2', 'Label3' ];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ], }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
