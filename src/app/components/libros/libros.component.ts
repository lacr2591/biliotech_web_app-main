import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';
import { Libro, RequestLibroBilbioteca } from '../../models/libro.models';
import 'animate.css';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  isLoading: boolean = true;
  librosFilters = [];
  descripcion: String="";

  constructor(private libroService: LibroService, private router: Router) {}

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.libroService.listarLibros().subscribe((resp) => {
      console.log(resp);
      this.libros = resp;
      if (this.libros) {
        this.isLoading = false;
      }
    });
  }

  async eliminarLibro(objLibro: any) {
    Swal.fire({
      title: '¿Estas seguro que desea eliminarlo?',
      showDenyButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        let body = {
          idLibro: objLibro.id_Libro,
          cantidad: 0,
          email: this.libroService.userEmail,
        };
        this.libroService.actualizarLibroBiblioteca(body).subscribe((resp) => {
          if (resp) {
            Swal.fire('Eliminado!', '', 'success');
            this.getLibros();
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Se cancelaron los cambios', '', 'info');
      }
    });
  }

  async modificarStock(objLibro: any) {
    console.log(objLibro);

    Swal.fire({
      title: 'Ingresar la cantidad',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#0275d8',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d9534f',
      showLoaderOnConfirm: true,
      preConfirm: (cant) => {
        console.log(cant);
        let body = {
          idLibro: objLibro.id_Libro,
          cantidad: cant,
          email: this.libroService.userEmail,
        };

        if (cant <= 0) {
          console.log('no funca');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe ingresar minimo 1',
          });
        } else {
          this.libroService
            .actualizarLibroBiblioteca(body)
            .subscribe((resp) => {
              Swal.fire({
                title: `Cantidad actualizada con éxito`,
                confirmButtonColor: '#0275d8',
              });
              this.getLibros();
            });
        }
      },
    });
  }
  filtrado() {
    let tabla = document.getElementById("tBody");

    if (tabla?.hasChildNodes()) {
      for (let i = 0; i < tabla.childNodes.length; i++) {
        const fila = tabla.childNodes[i];

        if (fila.hasChildNodes()) {

          if (fila.textContent?.toLocaleLowerCase().includes(this.descripcion.toLowerCase())) {
            document.getElementById("tBody")?.children.item(i)?.removeAttribute("hidden");
          } else {
            document.getElementById("tBody")?.children.item(i)?.setAttribute("hidden", "true");
          }
        }
      }
    }
  }
}
