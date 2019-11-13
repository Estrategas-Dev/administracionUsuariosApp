import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {
    apiUrl2 =
    "https://implementta.net/andro/ImplementtaMovil.aspx?query=sp_userVerifyImplementtaMovil";
    apiUrl3 =
    "https://implementta.net/andro/ImplementtaMovil.aspx?query=sp_cambiarRolMovil";
  constructor(private http: HttpClient) { }


  userVerify(username, idplaza) {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl2 + " " + '"' + username + '"' + "," + idplaza)
        .subscribe(
          data => {
            console.log(data)
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }
changeRol(idPlaza,idAspUser,idRol){
  return new Promise(resolve => {
    this.http
      .post(this.apiUrl3+' '+`${idPlaza},'${idAspUser}',${idRol}`,null)
      .subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        err => {
          console.log(err);
        }
      );
  });
}
}
