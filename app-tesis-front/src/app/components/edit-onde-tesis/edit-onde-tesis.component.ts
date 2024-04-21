import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TesisService } from '../../services/tesis.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-onde-tesis',
  standalone: true,
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './edit-onde-tesis.component.html',
  styleUrl: './edit-onde-tesis.component.css'
})
export default class EditOndeTesisComponent  implements OnInit{
  tesisForm!: FormGroup;
  oneTesis!:any;
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private tesisService: TesisService, private router:Router) {}

  async ngOnInit(){
    this.tesisForm = this.fb.group({
      titulo: ['', Validators.required],
      autores: [[]], // Un array vacío como valor inicial
      fechaPublicacion: ['', Validators.required],
      institucion: ['', Validators.required],
      areaEstudio: ['', Validators.required],
      palabrasClave: [[]], // Un array vacío como valor inicial
      resumen: ['', Validators.required],
      idioma: ['', Validators.required],
      formato: ['', Validators.required],
      asesores: [[]], // Un array vacío como valor inicial
      grado: ['', Validators.required]
    });
    
    // Si tienes datos iniciales para cargar en el formulario, puedes usar algo como esto:
    console.log(this.tesisForm.value);
    await this.cargarDatosExistente();
    console.log(this.tesisForm.value);

  }

  async cargarDatosExistente() {
    const tesisId:any = this.route.snapshot.paramMap.get('id');
    const data = await this.tesisService.obtenerUnaTesis(tesisId);
    console.log(data);
    this.oneTesis = data; 
    this.tesisForm.patchValue({
      titulo: this.oneTesis.titulo,
      autores: this.oneTesis.autores,
      fechaPublicacion: this.oneTesis.fechaPublicacion,
      institucion: this.oneTesis.institucion,
      areaEstudio: this.oneTesis.areaEstudio,
      resumen: this.oneTesis.resumen,
      idioma: this.oneTesis.idioma,
      formato: this.oneTesis.formato,
      grado: this.oneTesis.grado
   });
  }

  async loadSaved(){
    const data = await this.tesisService.editarTesis(this.oneTesis._id,this.tesisForm.value);
    console.log(data);
    this.router.navigate(['admin/tesis']);
  }
}
