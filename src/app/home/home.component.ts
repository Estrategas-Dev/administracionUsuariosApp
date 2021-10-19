import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(private firebaseService: FirebaseService, private router: Router, private service: RestService,
    private activateRoute: ActivatedRoute, private authService: AuthService) { }
  searchText: string;

  uid: string;
  usuarios: any;
  usuario: string;
  idPlaza: number;


  async ngOnInit() {
    this.uid = this.activateRoute.snapshot.paramMap.get('id');
    //console.log(this.uid);
    this.obtenerPlaza(this.uid)
  }

// Metodo para obtener la plaza del usuario que se logueo
  obtenerPlaza(uid) {
    this.firebaseService.getUser(uid).subscribe(resp => {
      //console.log(resp['idplaza']);
      this.idPlaza = resp['idplaza'];
      localStorage.setItem('idplaza', this.idPlaza.toString());
      this.getUsersByIdPlaza(this.idPlaza);
    })

  }

  // Metodo que trae a los usuarios por la plaza del usuario que se logueo
  async getUsersByIdPlaza(idplaza) {
    this.firebaseService.getUsersPlaza(idplaza).subscribe(data => {
      this.users = data;
      //console.log(data);
    })
  }

// Metodo que trae a todos los usuarios de las plazas,  no se ocupa
  getUsers() {
    this.firebaseService.getUsers().subscribe(data => {
      this.users = data.map(e => {

        this.usuarios.push(e.payload.doc.data()['name'], e.payload.doc.data()['email'], e.payload.doc.data()['appVersion'])
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          plaza: e.payload.doc.data()['plaza'],
          idasp: e.payload.doc.data()['idaspuser'],
          email: e.payload.doc.data()['email'],
          isHide: e.payload.doc.data()['isHide'],
          appVersion: e.payload.doc.data()['appVersion'],
          isActive: e.payload.doc.data()['isActive'],
          rol: e.payload.doc.data()['rol']
        };
      })
    })
  }

  // Metodo que tra la informacion del usuario por su uid, no se ocupa
  getUser(uid) {
    this.firebaseService.getUser(uid).subscribe(res => {
      //console.log("Esta es la informacion del usuario que se logueo");
      //console.log(res)
      let idPlaza = res['idplaza'];
      //console.log("el id de la plaza es " + res['idplaza']);
    })
  }

  // Metodo que va a la dirige a la pagina de detalle
  goDetail(id) {
    this.router.navigate(['/user-detail', id]);
  }



  importar() {
    //console.log('Entra a cargar los uduarios')
    for (let i = 0; i < this.users.length; i++) {
      let sqlString = `'${this.users[i].name}','${this.users[i].idasp}','${this.users[i].plaza}','${this.users[i].email}'`
      //console.log(sqlString)
      this.service.importar(sqlString)

    }

  }



  async hideButton(isHide: boolean, uid: string) {
    //console.log('detecta el cambio')
    isHide = !isHide;
    await this.firebaseService.updateFunctionUser(uid, isHide);
  }




}
