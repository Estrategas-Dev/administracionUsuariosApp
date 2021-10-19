import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private firebaseService: FirebaseService, private modalService: NgbModal, private service: RestService) { }

  id: any
  data: any
  closeResult: string;
  isActive: boolean
  funcionOculta: boolean
  rol: string = ''
  nameRol: string = 'Default'
  isCollapsed: boolean = true;
  async ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    //console.log(this.id)
    await this.getUserInfo(this.id)
  }

  getUserInfo(uid) {
    this.firebaseService.getUser(uid).subscribe(data => {
      this.data = data;
      //console.log(data)
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  changeStatus(uid) {
    this.modalService.dismissAll()
    //console.log(this.isActive)
    //console.log(uid)
    this.firebaseService.updateStatusUser(uid, this.isActive)
  }
  changeRole(uid, idaspuser, idplaza) {

    if (this.rol == '2') { this.nameRol = 'Abogado' } else if (this.rol == '5') { this.nameRol = 'Gestor' } else if (this.rol == '7') { this.nameRol = 'Reductor' }
    //console.log(this.nameRol)
    //console.log(uid, this.rol.toString(), idaspuser, idplaza)
    this.service.changeRol(idplaza, idaspuser, this.rol).then(() => {
      this.firebaseService.updateUserRol(uid, this.nameRol, this.rol);
    })
    this.modalService.dismissAll()
  }
  deleteIdDevice(uid) {
    this.firebaseService.deleteIddevice(uid)
    this.modalService.dismissAll()
  }
  activeFunction(uid) {

    this.modalService.dismissAll()
    //console.log(this.funcionOculta)
    //console.log(uid)
    this.firebaseService.updateFunctionUser(uid, this.funcionOculta)
  }
}