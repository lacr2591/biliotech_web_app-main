import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webb-bibliotech';

  userIsLoged: boolean = false;

  constructor(public loginService: LoginService) {

    loginService.user.subscribe( resp => {
      if(resp) {
        this.userIsLoged = true;
      }
    });


  }


}

