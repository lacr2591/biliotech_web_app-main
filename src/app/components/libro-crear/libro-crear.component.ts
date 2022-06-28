import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RequestLibroBilbioteca } from '../../models/libro.models';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css'],
})
export class LibroCrearComponent implements OnInit {
  constructor( private libroService: LibroService, private router: Router ) {}

  librosGeneral: RequestLibroBilbioteca[] = [];

  ngOnInit(): void {
    this.listarLibrosGeneral();
  }

  listarLibrosGeneral() {
    this.libroService.listarLibrosGeneral().subscribe( resp => {
      console.log(resp);
      this.librosGeneral = resp;
    });
  }

  async agregarLibro(objLibro: RequestLibroBilbioteca) {
    // console.log('id desde agregar libro a bliblioteca', id);
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

        if(cant == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe ingresar minimo 1',
          })
          return
        }


        console.log('respuesta desde sw',cant);
        let body = {
          idLibro: objLibro.idLibro,
          cantidad: cant,
          email: this.libroService.userEmail
        }
        this.libroService.registrarLibro(body).subscribe( resp => {
          console.log(JSON.stringify(body));
          console.log('Respuesta de guardado', resp);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Libro agregado con éxito`,
          confirmButtonColor: '#0275d8',
        });
        this.router.navigateByUrl('/libros');
      }
    });
  }
  
}
