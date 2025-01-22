import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.renderAreaChart();
    this.renderPieChart();
  }

  renderAreaChart(): void {
    const ctx = document.getElementById('areaChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [30, 50, 40, 60, 80],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }

  renderPieChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [
          {
            data: [40, 30, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }
}