import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Dashboard } from '../models/dashboard.models';

const API_URL_NET = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_JAVA = 'http://satoyam24-001-site1.dtempurl.com';
const API_URL_LOCAL = 'http://localhost:8090';

const API_URL = API_URL_LOCAL;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) { }

  GetCategoriasPrestamos(){

    return this._http.get<Dashboard>(API_URL+`/api/Dashboard/GetCategoriasPrestamos`);

  }
  GetInteraccionesCategorias(){

    return this._http.get<Dashboard>(API_URL+`/api/Dashboard/GetInteraccionesCategorias`);

  }
  GetLibrosRank(){

    return this._http.get<Dashboard>(API_URL+`/api/Dashboard/GetLibrosRank`);

  }
}
