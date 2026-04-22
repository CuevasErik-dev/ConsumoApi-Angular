import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnoTableComponent } from '../../components/alumno-table/alumno-table.component';
import { AlumnoFormComponent } from '../../components/alumno-form/alumno-form.component';

@Component({
  selector: 'app-alumno-dashboard',
  standalone: true,
  imports: [RouterModule, AlumnoTableComponent, AlumnoFormComponent],
  templateUrl: './alumno-dashboard.component.html',
  styleUrls: ['./alumno-dashboard.component.css']
})
export class AlumnoDashboardComponent {
}
