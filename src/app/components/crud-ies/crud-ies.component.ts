import { Component, OnInit } from '@angular/core';
import { EstudianteDetalle } from '../../models/estudiante.models';
import { EstudianteService } from '../../services/estudiante.service';
import { InstitucionService } from '../../services/institucion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-ies',
  templateUrl: './crud-ies.component.html',
  styleUrls: ['./crud-ies.component.css']
})
export class CRUDIESComponent implements OnInit {
  forma: FormGroup;
  fechaActual = new Date();
  fecha: string = '';

  constructor(
    private estudiantesService: EstudianteService,
    private institucionService: InstitucionService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fecha =
      this.fechaActual.getFullYear().toString() +
      '-' +
      (this.fechaActual.getMonth() + 1).toString() +
      '-' +
      this.fechaActual.getDate().toString();
    console.log(this.fecha);
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      id: [0],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaternos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaRegistro: [],
    });
  }

  agregarRepresentante() {

    if (this.forma.valid) {

      console.log(this.forma.value);
      this.forma.value.fechaRegistro = this.forma.value.fechaNacimiento;
      this.institucionService
        .crearRepresentante(this.forma.value)
        .subscribe((resp) => {
          console.log(resp);
          if (resp!=null &&resp >0) {
            alert("registrado");
            this.router.navigateByUrl('/estudiantes');

          }else {
            alert("No se pudo registrar.");
          }

          /*
          PROYECTO PLAN INTEGRADOR

          if (resp == 2) {
            alert("registrado");
            this.router.navigateByUrl('/estudiantes');

          } else if (resp == 3) {
            alert("El usuario ya existe.");
          } else {
            alert("No se pudo registrar.");
          }
          */

        });

    } else {
      alert("Todos los campos son requeridos");
    }
  }
}
