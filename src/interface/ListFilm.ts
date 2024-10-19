export interface ListFilm {
  id?: number;
  title: string;
  original_title: string;
  poster_path?: string;
}

export interface IDetailFilm extends ListFilm {
  tagline: string;
  overview: string;
}
