import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { Dashboard } from '../../models/dashboard.models';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  title="app";
  chart=[];
  lstDashboard:Dashboard;

  constructor(private _dashboard: DashboardService) { }

  ngOnInit(): void {
     
  }

}
