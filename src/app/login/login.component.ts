import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ='';
  password: string='';
  constructor( private router : Router, private authService : AuthService) { }

  ngOnInit() {
  }

  async login(email,password){
console.log(email, password)
 this.authService.login(email,password).then(async res => {

 console.log(res)
//this.router.navigateByUrl('/home',{ skipLocationChange: false });

this.router.navigateByUrl('/')

}).catch(error => alert('Error de autenticación, verifica usuario o contraseña'))

}
}
