import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docente-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docente-table.component.html',
  styleUrls: ['./docente-table.component.css']
})
export class DocenteTableComponent {
  docentes = [
    { id: '1', nombre: 'Ricardo Pineda', materia: 'Base de Datos' },
  ];

  isModalOpen = false;
  selectedDocente: any = null;

  openModal(docente: any) {
    this.selectedDocente = docente;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedDocente = null;
  }
}
