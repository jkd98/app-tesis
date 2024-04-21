import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-regist-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './regist-user.component.html',
  styleUrl: './regist-user.component.css'
})
export default class RegistUserComponent {
  estudianteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router,private estudService:EstudianteService) { }

  ngOnInit(): void {
    this.estudianteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      carrera: ['', Validators.required],
      semestre: ['', [Validators.required, Validators.min(1)]],
    });
  }

  async onSubmit() {
    if (this.estudianteForm.valid) {
      console.log('Formulario válido:', this.estudianteForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
      const data = await this.estudService.createEstudiante(this.estudianteForm.value);
      console.log(data);
    } else {
      console.log('Formulario inválido');
    }
  }

  redirectToLogin(){
    this.router.navigate(["auth"])
  }

}
