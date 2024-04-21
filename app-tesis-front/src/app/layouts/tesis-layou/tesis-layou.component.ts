import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tesis-layou',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './tesis-layou.component.html',
  styleUrl: './tesis-layou.component.css'
})
export default class TesisLayouComponent {

  constructor(private router:Router
  ){}
  logOut(){
    console.log('logout...'); 
    sessionStorage.removeItem('usr');
    this.router.navigate(['/regist/auth']);
  }
}
