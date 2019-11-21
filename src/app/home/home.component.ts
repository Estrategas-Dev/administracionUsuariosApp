import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users: any;
  constructor(private firebaseService : FirebaseService, private router : Router, private service : RestService) { }
  searchText:string;
  ngOnInit() {
    this.getUsers();
  }
getUsers(){
this.firebaseService.getUsers().subscribe(data=>{
  this.users = data.map(e => {
    return {
      id: e.payload.doc.id,
      name: e.payload.doc.data()['name'],
      plaza: e.payload.doc.data()['plaza'],
      idasp :e.payload.doc.data()['idaspuser'],
      email: e.payload.doc.data()['email'],
      isHide: e.payload.doc.data()['isHide'],
      appVersion: e.payload.doc.data()['appVersion'],
      isActive: e.payload.doc.data()['isActive']
     
    };
  })
})
}

getUser(uid){
  this.firebaseService.getUser(uid).subscribe(res=>{
    console.log(res)
  })
}
goDetail(id){
  this.router.navigate(['/user-detail',id])
}
importar(){
  console.log('Entra a cargar los uduarios')
  for(let i = 0; i< this.users.length; i++){
    let sqlString = `'${this.users[i].name}','${this.users[i].idasp}','${this.users[i].plaza}','${this.users[i].email}'`
    console.log(sqlString)
    this.service.importar(sqlString)

  }
  
}
  async hideButton(isHide : boolean, uid : string){
    console.log('detecta el cambio')
isHide = !isHide;
await this.firebaseService.updateFunctionUser(uid,isHide);
}
}
