import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudianteCrearComponent } from './components/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './components/estudiante-editar/estudiante-editar.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroCrearComponent } from './components/libro-crear/libro-crear.component';
import { LibroEditarComponent } from './components/libro-editar/libro-editar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CRUDIESComponent } from './components/crud-ies/crud-ies.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'estudiante/:id', component: EstudianteComponent},
  {path: 'estudiante-crear', component: EstudianteCrearComponent},
  {path: 'estudiante-editar/:id', component: EstudianteEditarComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'libro/:id', component: LibroComponent},
  {path: 'libro-crear', component: LibroCrearComponent},
  {path: 'libro-editar', component: LibroEditarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'crud-ies', component: CRUDIESComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
