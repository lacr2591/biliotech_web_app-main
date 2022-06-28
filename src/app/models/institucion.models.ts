interface Institucion {
  id: number;
  nombre: string;
  idUsuarioRepresentanteFk: number;
  idConfiguracionFk: number;
  dominioInstitucion: string;
  fecRegistro: string;
  idConfiguracionFkNavigation: IdConfiguracionFkNavigation;
  idUsuarioRepresentanteFkNavigation: IdUsuarioRepresentanteFkNavigation;
  tbSuscripciones: TbSuscripcione[];
  tbUsuarios: IdUsuarioRepresentanteFkNavigation[];
}

interface TbSuscripcione {
  id: number;
  idInstitucionFk: number;
  dominioInstitucion: string;
  fecRegistro: string;
  vigenciaDias: number;
  idInstitucionFkNavigation: string;
}

interface IdUsuarioRepresentanteFkNavigation {
  id: number;
  idPersonaFk: number;
  emailUsuario: string;
  passwordUsuario: string;
  rolId: number;
  fecRegistro: string;
  idInstitucionFk: number;
  idInstitucionFkNavigation: string;
  idPersonaFkNavigation: IdPersonaFkNavigation;
  rol: Rol;
  tbInstituciones: string[];
}

interface Rol {
  id: number;
  rol: string;
  descripcion: string;
  tbUsuarios: string[];
}

interface IdPersonaFkNavigation {
  id: number;
  nombres: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  fecNacimiento: string;
  dni: string;
  telefono: string;
  genero: string;
  tbUsuarios: string[];
}

interface IdConfiguracionFkNavigation {
  id: number;
  cantDiasPrestamo: number;
  tbInstituciones: string[];
}