import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TesisService } from '../../services/tesis.service';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-one-tesis',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './one-tesis.component.html',
  styleUrl: './one-tesis.component.css'
})
export default class OneTesisComponent {
  tesis: any; // Define una variable para almacenar los detalles de la tesis

  constructor(private route: ActivatedRoute, private tesisService: TesisService) { }

  ngOnInit(): void {
    // Obtener el ID de la tesis de los parámetros de la URL
    const tesisId:any = this.route.snapshot.paramMap.get('id');

    // Llamar al servicio para obtener los detalles de la tesis por su ID
    this.tesisService.obtenerUnaTesis(tesisId)
      .then((data)=>{
        this.tesis = data;
      })
  }
}
