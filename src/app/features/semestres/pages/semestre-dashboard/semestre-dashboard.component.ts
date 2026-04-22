import { Component } from '@angular/core';
import { SemestreTableComponent } from '../../components/semestre-table/semestre-table.component';
import { SemestreFormComponent } from '../../components/semestre-form/semestre-form.component';

@Component({
  selector: 'app-semestre-dashboard',
  standalone: true,
  imports: [SemestreTableComponent, SemestreFormComponent],
  templateUrl: './semestre-dashboard.component.html',
  styleUrls: ['./semestre-dashboard.component.css']
})
export class SemestreDashboardComponent {
}
