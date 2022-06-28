export interface Libro {
  id_Libro: number;
  title: string;
  title_Long?: string;
  language: string;
  edition: string;
  pages: number;
  coverLink: string;
  synopsys: string;
  stockDisponible: number;
  puntuacion: number;
  categorias: string;
  ratings: Rating[];
}

export interface Rating {
  puntuacion: number;
  fechaComentario: string;
  comentario: string;
}

export interface RequestLibroBilbioteca {
  idLibro: number;
  cantidad: number;
  title: string;
  edicion: string;
  coverLink: string;
  email: string;
}