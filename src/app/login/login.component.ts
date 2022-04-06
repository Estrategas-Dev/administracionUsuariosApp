import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    //this.authService.logout();
  }

  async login(email, password) {
    //console.log(email, password)
    this.authService.login(email, password).then(async res => {

      if (
      res['user'].email === 'admin.tecate@erdm.mx' || // Tecate
      res['user'].email === 'admin.mexicali.a@erdm.mx' || // Mexicali
      res['user'].email === 'admin.ensenada@erdm.mx' || // Ensenada 
      res['user'].email === 'admin.durango.a@erdm.mx' || // Durango agua
      res['user'].email === 'admin.durango.p@erdm.mx' || // Durango predio
      res['user'].email === 'admin.navolato.p@erdm.mx' || // Navolato predial
      res['user'].email === 'admin.lapaz@estrategas.mx' || // La Paz
      res['user'].email === 'admin.losreyeslapaza@estrategas.mx' || // Los Reyes La Paz agua
      res['user'].email === 'admin.losreyeslapazp@estrategas.mx' || // Los Reyes La Paz predio
      res['user'].email === 'admin.tijuana.agua@erdm.mx' || // Tijuana agua
      res['user'].email === 'admin.tijuana@erdm.mx' || // Tijuana predio
      res['user'].email === 'admin.torreon.a@erdm.mx' || //Torreon 
      res['user'].email === 'admin.piedrasnegras.p@erdm.mx' || // Piedras Negras
      res['user'].email === 'admin.navolato.a@erdm.mx' || // Navolato agua
      res['user'].email === 'admin.tepic.a@erdm.mx' || // Tepic agua
      res['user'].email === 'admin.mazatlan.a@erdm.mx' || // Mazatlan
      res['user'].email === 'demo@erdm.mx' // Demo
      res['user'].email === 'testing.zapopanp.p@erdm.mx' // Zapopan Predio
      ) {
       // console.log(res['user'].email);
        Swal.fire({
          title: 'Inicio de sesión correcta',
          text: 'Bienvenid@ ' + res['user'].email,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        //console.log("Este es el usuario logueado", res);
        let usuarioLogueado = (res['user'].uid);
        localStorage.setItem('uid', usuarioLogueado);
        this.router.navigate(['/home', usuarioLogueado]);
       
      } else {
        Swal.fire({
          title: 'Error',
          text: 'El usuario ' + res['user'].email + ' no tiene acceso',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        })
        this.authService.logout();
      }
      
      //this.router.navigateByUrl('/home',{ skipLocationChange: false });

      

    }).catch(error => {
      Swal.fire({
        title: 'Error',
        text: 'Error de autenticación verificar credenciales',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      })
    })

  }
}
