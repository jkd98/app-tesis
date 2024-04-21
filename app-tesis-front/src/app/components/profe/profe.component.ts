import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-profe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profe.component.html',
  styleUrl: './profe.component.css'
})
export default class ProfeComponent {
  profesorForm!: FormGroup;

  constructor(private fb: FormBuilder,private profeS:ProfesorService) {
    this.profesorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      departamento: ['', Validators.required],
      especialidad: ['', Validators.required],
      gradoAcademico: ['', Validators.required],
      experiencia: [''],
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    // Aquí puedes enviar los datos del formulario al servidor
    console.log(this.profesorForm.value);
    const data = await this.profeS.createProf(this.profesorForm.value);
    console.log(data);
  }
}
