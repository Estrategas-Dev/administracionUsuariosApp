import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
juan:string =''
plaza: string=''
user: string=''
data: any
nombre:string=''
idplaza:string=''
idChecador :string=''
usuario: string =''
password1: string=''
password2 : string=''
idAspUser: string=''
rol:string=''

  constructor( private service : RestService, private authService : AuthService,private spinner: NgxSpinnerService,private router : Router) { }

  ngOnInit() {
  }
  async verificaUsuario(){
    if(this.user == ''|| this.idplaza ==''){
      alert('Ingresa los datos completos')
    }else{
      this.data = await this.service.userVerify(this.user,this.idplaza)
      this.nombre = this.data[0].nombre
      this.usuario = this.data[0].usuario
      this.plaza = this.data[0].plaza
      this.idChecador = this.data[0].idUser
      this.idAspUser = this.data[0].idAspUser
      this.rol = this.data[0].rol

    
    }
 

}
async crearUsuario(){
 
  if(this.password1 !=""){ 

    if(this.password1 != this.password2){
      alert("Las contraseñas no coinciden, verifica por favor :(")
    }else{
      this.spinner.show();
let idaspuser = this.data[0].idaspuser;
let idrol = this.data[0].idrol;
let nombre = this.data[0].nombre;
let user  = this.data[0].usuario;
let rol = this.data[0].rol;
let idplaza = this.idplaza;
let password = this.password1;
let plaza = this.data[0].plaza;
let idUserChecador = this.data[0].idUser
console.log(user,password,nombre,idplaza,idrol,idaspuser,rol)

this.authService.register(user,password,nombre,idplaza,idrol,idaspuser,rol,plaza,idUserChecador).then(res=>{
  this.spinner.hide();
  this.router.navigate(['/home'])
console.log(res)
}).catch (err =>{
  this.spinner.hide();
 
  alert(err)
})}
  }else{

    alert("Verifica todos los campos")
  }

}
}
