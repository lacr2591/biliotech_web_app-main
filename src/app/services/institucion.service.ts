import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudianteDetalle } from '../models/estudiante.models';
import { Libro, RequestLibroBilbioteca } from '../models/libro.models';
import { LoginService } from './login.service';

const API_URL_NET = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_JAVA = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_LOCAL = 'http://localhost:8090';

const API_URL = API_URL_LOCAL;

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  userEmail: string = "";

  constructor(private http: HttpClient) { 

  }

  listarInstituciones() {
    return this.http.get<Libro[]>(API_URL+`/api/Instituciones`);
  }

  listarRepresentantesInstituciones() {
    return this.http.get<Libro[]>(API_URL+`/api/Instituciones/ListarUsuariosDeInstitucion`);
  }

  
  crearRepresentante(obj: EstudianteDetalle) {
    const body = {
      id: 0,
      tipoDocumento: obj.tipoDocumento,
      numeroDocumento: obj.numeroDocumento,
      nombres: obj.nombres,
      apellidoPaterno: obj.apellidoPaterno,
      apellidoMaternos: obj.apellidoMaternos,
      fechaNacimiento: obj.fechaNacimiento,
      genero: obj.genero,
      email: obj.email,
      telefono: obj.telefono,
      fechaRegistro:obj.fechaNacimiento
    }
    
    
    return this.http.post(API_URL+`/api/Instituciones/AgregarRepresentante`, body);

  }

}
