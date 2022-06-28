import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Dashboard } from '../../models/dashboard.models';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="app";
  chart=[];
  lstDashboard:Dashboard;

  constructor( private dashService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.loadChart1();
    this.loadChart2();
    this.loadChart3();

  }

  loadChart1(){
    this.dashService.GetCategoriasPrestamos().subscribe((resp) => {
      console.log(resp);
      this.lstDashboard = resp;
      const x =this.lstDashboard.lstX;
      const y =this.lstDashboard.lstY;

      const myChart = new Chart("myChart1", {
        type: 'bar',
        data: {
          labels: y,
          datasets: [{
            label: 'Prestamos por categoria',
            data: x,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    });
  }

  loadChart2(){
    this.dashService.GetInteraccionesCategorias().subscribe((resp) => {
      console.log(resp);
      this.lstDashboard = resp;
      const x =this.lstDashboard.lstX;
      const y =this.lstDashboard.lstY;

      const myChart = new Chart("myChart2", {
        type: 'bar',
        data: {
          labels: y,
          datasets: [{
            label: 'Interacciones por categoria',
            data: x,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    });
  }
  
  loadChart3(){
    this.dashService.GetLibrosRank().subscribe((resp) => {
      console.log(resp);
      this.lstDashboard = resp;
      const x =this.lstDashboard.lstX;
      const y =this.lstDashboard.lstY;

      const myChart = new Chart("myChart3", {
        type: 'bar',
        data: {
          labels: y,
          datasets: [{
            label: 'Interacciones por Libro',
            data: x,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    });
  }

}
