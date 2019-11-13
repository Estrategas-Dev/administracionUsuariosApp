import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {firebaseConfig} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import {AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { NavegationComponent } from './navegation/navegation.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavegationComponent,
    UserDetailComponent,
    AddUserComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
   AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFireStorage,AngularFirestore
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
