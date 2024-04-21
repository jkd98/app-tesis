import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-lay',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './admin-lay.component.html',
  styleUrl: './admin-lay.component.css'
})
export default class AdminLayComponent {
  public rol:any;
  constructor(private router:Router
  ){}
  logOut(){
    console.log('logout...'); 
    sessionStorage.removeItem('usr');
    this.router.navigate(['/regist/auth']);
  }
}
