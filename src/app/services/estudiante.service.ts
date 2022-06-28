import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante, EstudianteDetalle } from '../models/estudiante.models';
import {formatDate} from '@angular/common';

const API_URL_NET = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_JAVA = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_LOCAL = 'http://localhost:8090';

const API_URL = API_URL_LOCAL;

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiantes() {
    return this.http.get<Estudiante[]>(API_URL+`/api/Usuarios/ListarEstudiantes`);
  }

  getEstudianteById( id: number ) {

    return this.http.get<EstudianteDetalle>(API_URL+`/api/Usuarios/DetalleEstudiante?idEstudiante=${id}`);

  }

  crearEstudiante(obj: EstudianteDetalle) {
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
      fechaRegistro: formatDate(new Date(), 'yyyy-MM-dd', 'en')
    }
    
    console.log('LOG DEL BODDY', body);
    
    return this.http.post(API_URL+`/api/Usuarios/AgregarEstudiante`, body);

  }

  // editarEstudiante(objEstudiante: EstudianteDetalle) {

  //   const body = {
  //     objEstudiante
  //   }

  //   return this.http.post(`${API_URL}/api/Usuarios/AgregarEstudiante`, body);

  // }





}
