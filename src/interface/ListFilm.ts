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
  id?: number;
  release_date: string;
}
export interface IOverview {
  id?: number;
  poster_path: string;
  title: string;
  production_companies: string;
  original_title: string;
  release_date: string;
  status: string;
  genres: {
    name: string;
  }[];
  spoken_languages: string;
  overview: string;
}
