import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore) { }


  login( email : string, password : string){
    console.log(email, password)
    return new Promise((resolve,rejected)=>{
   this.AFauth.auth.signInWithEmailAndPassword(email,password).then(  user =>{
     console.log(user)
      resolve(user)
 }).catch(error => rejected(error));

});

 }
 logout(){
  this.AFauth.auth.signOut().then(()=>{
  
    this.router.navigate(['/login']);
  })
 
}



register(email : string, password : string, name : string, idplaza :string, idrol : number,idaspuser : string,rol:string,plaza :string, idUserChecador : number){

  return new Promise ((resolve, reject) => {
    this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
      const uid = res.user.uid;
        this.db.collection('usersImplementta').doc(uid).set({
          name : name,
          email : email,
          password : password,
          idplaza : idplaza,
          idrol : idrol,
          idaspuser : idaspuser,
          uid : uid,
          rol: rol,
          plaza : plaza,
          idUserChecador : idUserChecador,
          IMEI :"",
          lastSession:"",
          managedAccounts:0,
          totalAccounts:0,
          isActive: true,
          isHide:false,
          lastSync:'',
          urlImage: ""
        })
      
      resolve(res)
    }).catch( err => reject(err))
  })
}

}