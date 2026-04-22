import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semestre-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semestre-table.component.html',
  styleUrls: ['./semestre-table.component.css']
})
export class SemestreTableComponent {
  semestres = [
    { id: '1', nombre: 'Primer Semestre 2024' },
  ];

  isModalOpen = false;
  selectedSemestre: any = null;

  openModal(semestre: any) {
    this.selectedSemestre = semestre;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedSemestre = null;
  }
}
