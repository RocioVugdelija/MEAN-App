import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: []
})
export class Graphic1Component implements OnInit {

  charts: any = {
    'graphic1': {
      'labels': ['Arts', 'Economics', 'Computer Science'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'title': 'What will you study?'
    },
    'graphic2': {
      'labels': ['Women', 'Men'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'title': 'Gender'
    },
    'graphic3': {
      'labels': ['Yes', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'title': 'Do you currently work?'
    },
    'graphic4': {
      'labels': ['No', 'Yes'],
      'data':  [85, 15],
      'type': 'doughnut',
      'title': 'Would you do a master degree?'
    },
  };

   chartsArray = Object.keys(this.charts).map(i => this.charts[i])

  
  constructor() { }

  ngOnInit() {
  }

}
