import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users: any;
  constructor(private firebaseService : FirebaseService, private router : Router) { }
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
      email: e.payload.doc.data()['email'],
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
}
