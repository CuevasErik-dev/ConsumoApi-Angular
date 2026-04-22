import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MateriaTableComponent } from '../../components/materia-table/materia-table.component';
import { MateriaFormComponent } from '../../components/materia-form/materia-form.component';

@Component({
  selector: 'app-materia-dashboard',
  standalone: true,
  imports: [RouterModule, MateriaTableComponent, MateriaFormComponent],
  templateUrl: './materia-dashboard.component.html',
  styleUrls: ['./materia-dashboard.component.css']
})
export class MateriaDashboardComponent {
}
