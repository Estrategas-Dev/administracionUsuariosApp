import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db : AngularFirestore) { }

  getUsers(){
    return this.db.collection('usersImplementta').snapshotChanges()
   
  }
getUser(uid){
  return this.db.collection('usersImplementta').doc(uid).valueChanges()
}
updateStatusUser(uid , status){
  return this.db.collection('usersImplementta').doc(uid).update({
    isActive : status
  })
}
updateUserRol(uid, Rol, idRol){
  return this.db.collection('usersImplementta').doc(uid).update({
rol : Rol,
idrol :idRol
  })
}
deleteIddevice(uid){
  return this.db.collection('usersImplementta').doc(uid).update({
    IMEI :''
  })
}
updateFunctionUser(uid,funcionOculta){
  return this.db.collection('usersImplementta').doc(uid).update({
    isHide : funcionOculta
  })
}
}
