import { Routes } from '@angular/router';
import { MainDashboardComponent } from './features/dashboard/pages/main-dashboard/main-dashboard.component';
import { AlumnoDashboardComponent } from './features/alumnos/pages/alumno-dashboard/alumno-dashboard.component';
import { MateriaDashboardComponent } from './features/materias/pages/materia-dashboard/materia-dashboard.component';
import { SemestreDashboardComponent } from './features/semestres/pages/semestre-dashboard/semestre-dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'alumnos', component: AlumnoDashboardComponent },
  { path: 'materias', component: MateriaDashboardComponent },
  { path: 'semestres', component: SemestreDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
