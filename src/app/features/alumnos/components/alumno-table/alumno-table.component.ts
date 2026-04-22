import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-table.component.html',
  styleUrls: ['./alumno-table.component.css']
})
export class AlumnoTableComponent {
  alumnos = [
    { id: '22620050', name: 'Ameli', lastName: 'Reyes', email: 'amelireyes@gmail.com', phone: '9531236651' },
  ];

  isModalOpen = false;
  selectedAlumno: any = null;

  openModal(alumno: any) {
    this.selectedAlumno = alumno;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedAlumno = null;
  }
}
