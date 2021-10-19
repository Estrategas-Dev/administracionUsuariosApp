import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usuariosApp';

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    localStorage.clear();
    this.auth.logout();
  }



}
