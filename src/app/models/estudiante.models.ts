export interface Estudiante {
  id: number;
  numeroDocumento: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaternos: string;
}

export interface EstudianteDetalle {
  id: number;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaternos: string;
  fechaNacimiento: string;
  genero: string;
  email: string;
  telefono: string;
  fechaRegistro: string;
}