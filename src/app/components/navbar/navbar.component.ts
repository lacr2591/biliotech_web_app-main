import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userLogin: string = "";

  userIsLogged: Boolean = false;

  constructor( private loginService: LoginService, private router: Router) { 

    loginService.user.subscribe( resp => {
      if (resp) {
        this.userLogin = resp;
        this.userIsLogged = true;

      }
      
      console.log(this.userLogin);
      console.log(this.userIsLogged);
      
    });

  }

  ngOnInit(): void {
  }

  
  logout(): void {
    localStorage.clear();
    this.loginService.user.next('');
    this.userIsLogged = false;
    this.router.navigateByUrl('/');
  }


}
