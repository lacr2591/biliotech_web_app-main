import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro, RequestLibroBilbioteca } from '../models/libro.models';
import { LoginService } from './login.service';


const API_URL_JAVA = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_NET = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_LOCAL = 'http://localhost:8090';

const API_URL = API_URL_LOCAL;
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  userEmail: string = "";

  constructor(private http: HttpClient, private loginService: LoginService) { 
    loginService.user.subscribe( resp => {
      this.userEmail = resp;
      console.log(this.userEmail);
      
    });
  }

  listarLibros() {
    return this.http.get<Libro[]>(API_URL+`/api/Biblioteca/ListarLibrosBiblioteca?email=${this.userEmail}`);
  }

  listarLibrosGeneral() {
    return this.http.get<RequestLibroBilbioteca[]>(API_URL+`/api/Biblioteca/ListarLibrosGeneral?email=${this.userEmail}`);
  }

  detalleLibroId(id: number ) {
    return this.http.get<Libro>(API_URL+`/api/Libros/DetalleLibro?idLibro=${id}`);
  }

  listarLibrosEstudiante(id: number) {
    return this.http.get<Libro[]>(API_URL+`/api/Libros/ListarLibrosxEstudiante?idEstudiante=${id}`);
  }

  registrarLibro(objLibro: any) {
    
    return this.http.post(API_URL+`/api/Biblioteca/RegistrarLibroBiblioteca`, objLibro);
  }

  actualizarLibroBiblioteca(objLibro: any) {
    console.log("AGREGANDO");
    console.log(objLibro);
    return this.http.post(API_URL+`/api/Biblioteca/ActualizarStockLibroBiblioteca`, objLibro);
  }

}
