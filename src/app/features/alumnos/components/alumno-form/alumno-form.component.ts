import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      imageUrl: [''],
      nombre: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      apellido: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      numeroControl: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]]
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

  filtrarSoloNumeros(controlName: string, maxLen: number): void {
    const ctrl = this.form.get(controlName)!;
    let val: string = ctrl.value ?? '';
    val = val.replace(/\D/g, '');
    if (val.length > maxLen) val = val.slice(0, maxLen);
    ctrl.setValue(val, { emitEvent: false });
  }

  guardar(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    console.log('Alumno guardado:', this.form.value);
  }

  cancelar(): void {
    this.submitted = false;
    this.form.reset();
  }
}
