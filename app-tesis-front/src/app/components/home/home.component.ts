import { Component, OnInit } from '@angular/core';
import { TesisService } from '../../services/tesis.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit{
  public categorias:Array<any>;
  public tesisList:Array<any>;
  public autor:Array<any>;
  public areaEstudio:any;
  public grado:any;
  public iniF:any;
  public fin:any;
  public rol:any;

  constructor(private tesisService:TesisService, private router:Router){
    this.tesisList=new Array();
    this.categorias=new Array();
    this.autor = new Array();
  }
  async ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('usr')!);
    this.rol=data.rol;
    console.log(this.rol);
    this.llenarLista();
    this.cargarCategorias();
  }
  
  async llenarLista(){
    const data = await this.tesisService.listarTesis();
    this.tesisList = data.datos;
    console.log(this.tesisList);
  }

  async buscarTesisConFiltros() {
    let filtros = {
      "autor":this.autor,
      "areaEstudio":this.areaEstudio,
      "grado":this.grado,
      "fechaInicio":this.iniF,
      "fechaFin":this.fin
    };
    console.log(filtros);
    console.log("filtrar");
    const data = await this.tesisService.buscarTesis(filtros);
    this.tesisList = data.datos;
    console.log(data);
  }

  redirectOneTesis(id:string){
    console.log(id);
    this.router.navigate(['admin/tesis/'+id]);
  }
  editOneTesis(id:string){
    console.log(id);
    this.router.navigate(['admin/tesis/edit/'+id]);
  }
  async deleteOneTesis(id:string){
    const data = await this.tesisService.borrarTesis(id);
    console.log(data);
  }

  async cargarCategorias(){
    const data = await this.tesisService.obtenerCategorias();
    const datos:any = data.datos;
    this.categorias=datos;
    console.log(this.categorias);
  }

}
