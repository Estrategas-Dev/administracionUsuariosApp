import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from '../app/login/login.component'
import {HomeComponent } from '../app/home/home.component'
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [

  { path: '', redirectTo: 'login',pathMatch: 'full' },
  { path: 'home/:id',component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'add-user', component:AddUserComponent  },
  { path: 'user-detail/:id', component:UserDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
