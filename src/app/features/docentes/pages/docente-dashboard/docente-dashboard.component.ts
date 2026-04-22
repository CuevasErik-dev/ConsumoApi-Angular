import { Component } from '@angular/core';
import { DocenteTableComponent } from '../../components/docente-table/docente-table.component';
import { DocenteFormComponent } from '../../components/docente-form/docente-form.component';

@Component({
  selector: 'app-docente-dashboard',
  standalone: true,
  imports: [DocenteTableComponent, DocenteFormComponent],
  templateUrl: './docente-dashboard.component.html',
  styleUrls: ['./docente-dashboard.component.css']
})
export class DocenteDashboardComponent {
}
