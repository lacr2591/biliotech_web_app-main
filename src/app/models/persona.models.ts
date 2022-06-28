export interface Persona {
  id: number;
  idPersonaFk: number;
  emailUsuario: string;
  passwordUsuario: string;
  rolId: number;
  fecRegistro: string;
  idInstitucionFk: number;
  idInstitucionFkNavigation: IdInstitucionFkNavigation;
  idPersonaFkNavigation: IdPersonaFkNavigation;
  rol: RolPersona;
  tbInstituciones: IdInstitucionFkNavigation[];
}

interface RolPersona {
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

interface IdInstitucionFkNavigation {
  id: number;
  nombre: string;
  idUsuarioRepresentanteFk: number;
  idConfiguracionFk: number;
  dominioInstitucion: string;
  fecRegistro: string;
  idConfiguracionFkNavigation: IdConfiguracionFkNavigation;
  idUsuarioRepresentanteFkNavigation: string;
  tbSuscripciones: TbSuscripcione[];
  tbUsuarios: string[];
}

interface TbSuscripcione {
  id: number;
  idInstitucionFk: number;
  dominioInstitucion: string;
  fecRegistro: string;
  vigenciaDias: number;
  idInstitucionFkNavigation: string;
}

interface IdConfiguracionFkNavigation {
  id: number;
  cantDiasPrestamo: number;
  tbInstituciones: string[];
}