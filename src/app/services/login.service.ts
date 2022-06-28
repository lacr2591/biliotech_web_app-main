import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API_URL_NET = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_JAVA = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_LOCAL = 'http://localhost:8090';

const API_URL = API_URL_LOCAL;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new BehaviorSubject<string>('');

  constructor( private http: HttpClient ) { 
    const user_email = localStorage.getItem('user_email');
    if (user_email) {
        this.user.next(user_email);
    }

  }


  loginUser(email: string, password: string) {

    return this.http.get(API_URL_LOCAL+`/api/Usuarios/LoginRepresentante?email=${email}&password=${password}`);

    
}

}
