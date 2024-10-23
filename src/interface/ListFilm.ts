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
export interface ITrending {
  original_title: string;
  popularity: number;
}

export interface IComming {
  poster_path: string;
  original_title: string;
}
export interface ITopRate extends IComming {
  release_date: string;
}
