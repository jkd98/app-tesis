import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export default class UsuariosComponent {

}
