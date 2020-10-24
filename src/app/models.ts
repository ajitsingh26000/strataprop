export interface MList {
  id: string;
  title: string;
  movies: Movie[];
}

export interface Movie {
  id: string;
  title: string;
  status: string;
  details: string;
  rating: string;
}
