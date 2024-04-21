import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private authServ:AuthService
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      rol:['', Validators.required]
    });
  }

  async onSubmit() {
    const { rol } = this.loginForm.value;
    console.log('login...'+rol);
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
      const data = await this.authServ.iniciarSesion(this.loginForm.value);
      if(rol==='adm'){
        this.router.navigate(["/admin/tesis"]);
      }else{
        this.router.navigate(["/inicio/tesis"]);
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  redirectToregister(){
    console.log('Redirect...');
    this.router.navigate(["regist"]);
  }
}
