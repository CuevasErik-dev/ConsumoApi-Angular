import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Chart,
  BarController, BarElement,
  LineController, LineElement, PointElement,
  DoughnutController, ArcElement,
  CategoryScale, LinearScale,
  Tooltip, Legend, Filler
} from 'chart.js';

// Registrar solo los modulos de Chart.js que usamos
Chart.register(
  BarController, BarElement,
  LineController, LineElement, PointElement,
  DoughnutController, ArcElement,
  CategoryScale, LinearScale,
  Tooltip, Legend, Filler
);

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements AfterViewInit {

  @ViewChild('alumnosPorSemestreChart') alumnosChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('materiasPorCreditosChart') materiasChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('docentesPorMateriaChart') docentesChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('alumnosIngresoPorAnioChart') ingresoChartRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.crearGraficaAlumnosPorSemestre();
    this.crearGraficaMateriasPorCreditos();
    this.crearGraficaDocentesPorMateria();
    this.crearGraficaIngresoPorAnio();
  }

  private crearGraficaAlumnosPorSemestre() {
    new Chart(this.alumnosChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['1er Sem', '2do Sem', '3er Sem', '4to Sem', '5to Sem', '6to Sem', '7mo Sem', '8vo Sem'],
        datasets: [{
          label: 'Alumnos',
          data: [180, 165, 155, 142, 130, 118, 105, 95],
          backgroundColor: '#3b82f6',
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: '#e5e7eb' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  private crearGraficaMateriasPorCreditos() {
    new Chart(this.materiasChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['3 Créditos', '4 Créditos', '5 Créditos', '6 Créditos'],
        datasets: [{
          data: [8, 18, 12, 4],
          backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: { position: 'bottom', labels: { padding: 12, font: { size: 12 } } }
        },
        cutout: '65%'
      }
    });
  }

  private crearGraficaDocentesPorMateria() {
    new Chart(this.docentesChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Sistema 1', 'Sistema 2', 'Sistema 3', 'Sistema 4', 'Sistema 5', 'Sistema 6'],
        datasets: [{
          label: 'Datos',
          data: [12, 18, 10, 8, 14, 11],
          backgroundColor: '#8b5cf6',
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        indexAxis: 'y' as const,
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { color: '#e5e7eb' } },
          y: { grid: { display: false } }
        }
      }
    });
  }

  private crearGraficaIngresoPorAnio() {
    new Chart(this.ingresoChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Nuevos Alumnos',
          data: [210, 198, 245, 230, 268, 280],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.08)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#10b981',
          pointRadius: 4,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: '#e5e7eb' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}