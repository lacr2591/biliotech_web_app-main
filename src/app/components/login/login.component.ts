import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  mensaje: string;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.mensaje = '';
  }

  ngOnInit(): void {
    localStorage.clear();
    this.crearFormulario();
  }

  login() {
    if (!this.forma.invalid) {
      const { email, password } = this.forma.value;

      this.loginService.loginUser(email, password).subscribe((resp) => {
        if (resp === true) {
          localStorage.setItem('user_email', email);
          this.loginService.user.next(email);
          this.router.navigateByUrl('/estudiantes');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: 'No puede ingresar con una cuenta de estudiante',
            confirmButtonColor: '#0275d8'
          });
        }
      });
    }
  }

  crearFormulario() {
    this.forma = this.fb.group({
      email: ['i202014475@cibertec.edu.pe', Validators.required],
      password: ['1234', Validators.required],
    });
  }
}
