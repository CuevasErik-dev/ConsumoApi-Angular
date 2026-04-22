import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materia-table.component.html',
  styleUrls: ['./materia-table.component.css']
})
export class MateriaTableComponent {
  materias = [
    { id: 1, nombre: 'Base de Datos', creditos: 5, semestre: 'Quinto' },
    { id: 2, nombre: 'Programación Orientada a Objetos', creditos: 4, semestre: 'Segundo' },
    { id: 3, nombre: 'Sistemas Operativos', creditos: 4, semestre: 'Sexto' },
    { id: 4, nombre: 'Desarrollo Ágil', creditos: 4, semestre: 'Octavo' },
    { id: 5, nombre: 'Estructura de Datos', creditos: 5, semestre: 'Tercero' },
    { id: 6, nombre: 'Ingeniería de Software', creditos: 4, semestre: 'Séptimo' },
  ];

  isModalOpen = false;
  selectedMateria: any = null;

  openModal(materia: any) {
    this.selectedMateria = materia;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMateria = null;
  }
}
