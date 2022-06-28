import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.models';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro: Libro = {
    id_Libro: 0,
    title: "",
    title_Long: "",
    language: "",
    edition: "",
    pages: 0,
    coverLink: "",
    synopsys: "",
    stockDisponible: 0,
    puntuacion: 0,
    categorias: "",
    ratings: []
  };

  constructor( private libroService: LibroService, private activatedRoute: ActivatedRoute) { }

  isLoading: boolean = true;


  ngOnInit(): void {
    this.getLibroDetalle();
  }

  getLibroDetalle() {

    const id = this.activatedRoute.snapshot.params.id;

    console.log(id);
    
    this.libroService.detalleLibroId(id).subscribe( resp => {
      console.log(resp);
      this.libro = resp;
      if (this.libro) {
        this.isLoading = false;
      }
    })
  }



}
