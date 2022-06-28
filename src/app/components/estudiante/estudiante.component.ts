import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteDetalle } from '../../models/estudiante.models';
import { LibroService } from '../../services/libro.service';
import { Libro } from 'src/app/models/libro.models';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent implements OnInit {
  idEstudiante: number = 0;
  isLoading: boolean = true;
  loadingBooks: boolean = false;

  estudianteDetalle: EstudianteDetalle = {
    id: 0,
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaternos: '',
    fechaNacimiento: '',
    genero: '',
    email: '',
    telefono: '',
    fechaRegistro: '',
  };

  libros: Libro[] = [];

  constructor(
    private estudiantesService: EstudianteService,
    private activatedRoute: ActivatedRoute,
    private libroService: LibroService
  ) { }

  ngOnInit(): void {
    this.getDetalleEstudiante();

    this.getLibrosByEstudiante();
  }

  getDetalleEstudiante() {
    const id = this.activatedRoute.snapshot.params.id;

    this.estudiantesService.getEstudianteById(id).subscribe((resp) => {
      console.log(resp);
      this.estudianteDetalle = resp;
    });
  }

  getLibrosByEstudiante() {
    const id = this.activatedRoute.snapshot.params.id;
    this.libroService.listarLibrosEstudiante(id).subscribe((resp) => {
      console.log('Libros de estudante', resp);
      this.libros = resp;
      if (this.libros) {
        this.isLoading = false;
      }

      if (this.libros != null) {
        console.log("No Llega nulo");

        if (this.libros.length <= 0) {
          this.loadingBooks = true;
        }

      } else {
        this.isLoading = false;

      }


    });
  }
}
