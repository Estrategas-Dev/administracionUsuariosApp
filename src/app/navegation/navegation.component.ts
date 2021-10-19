import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  usuarioLogueado:any;

  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit() {
    this.usuarioLogueado = localStorage.getItem('uid');
    //console.log("Esta es el uid que se guardara en el local storage", this.usuarioLogueado);
  }

  irInicio() {
    this.router.navigate(['/home', this.usuarioLogueado]);
  }

  exit() {
    localStorage.clear();
    this.auth.logout();
  }

}
