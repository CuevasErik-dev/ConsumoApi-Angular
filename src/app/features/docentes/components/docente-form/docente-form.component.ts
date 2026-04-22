import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docente-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './docente-form.component.html',
  styleUrls: ['./docente-form.component.css']
})
export class DocenteFormComponent implements OnInit {
  // Contador secuencial que persiste mientras la sesión esté activa
  private static nextId = 1;

  form!: FormGroup;
  submitted = false;
  idGenerado = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.idGenerado = String(DocenteFormComponent.nextId);

    this.form = this.fb.group({
      idDocente: [{ value: this.idGenerado, disabled: true }],
      nombre: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      apellido: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      materia: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  get f() { return this.form.controls; }

  filtrarSoloLetras(controlName: string, maxLen: number): void {
    const ctrl = this.form.get(controlName)!;
    let val: string = ctrl.value ?? '';
    val = val.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    if (val.length > maxLen) val = val.slice(0, maxLen);
    ctrl.setValue(val, { emitEvent: false });
  }

  filtrarTextoLibre(controlName: string, maxLen: number): void {
    const ctrl = this.form.get(controlName)!;
    let val: string = ctrl.value ?? '';
    if (val.length > maxLen) {
      ctrl.setValue(val.slice(0, maxLen), { emitEvent: false });
    }
  }

  guardar(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    // Incrementar el contador para el próximo docente
    DocenteFormComponent.nextId++;
    console.log('Docente guardado:', { id: this.idGenerado, ...this.form.value });
    // Resetear y preparar para el siguiente
    this.submitted = false;
    this.idGenerado = String(DocenteFormComponent.nextId);
    this.form.reset({ idDocente: this.idGenerado });
    this.form.get('idDocente')?.disable();
  }

  cancelar(): void {
    this.submitted = false;
    this.form.reset({ idDocente: this.idGenerado });
    this.form.get('idDocente')?.disable();
  }
}
