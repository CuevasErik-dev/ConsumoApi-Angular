import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      creditos: ['', [Validators.required, Validators.pattern(/^[1-9]$/)]],
      semestre: ['', Validators.required]
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

  filtrarUnDigito(controlName: string): void {
    const ctrl = this.form.get(controlName)!;
    let val: string = ctrl.value ?? '';
    val = val.replace(/\D/g, '');        // solo dígitos
    if (val.length > 1) val = val.slice(0, 1); // solo 1 caracter
    ctrl.setValue(val, { emitEvent: false });
  }

  guardar(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    console.log('Materia guardada:', this.form.value);
  }

  cancelar(): void {
    this.submitted = false;
    this.form.reset();
  }
}
