import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MOCK_MOVIES } from '../mock-movies';
import { MList, Movie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieLists: MList[] = MOCK_MOVIES;

  constructor() {}

  deleteMovie<T>(movie: Movie, dialogRef: MatDialogRef<T>): void {
    if (confirm('Are you sure you want to delete this movie')) {
      const movies = this.movieLists.find(
        (movieList) => movieList.id === movie.status
      )?.movies;
      movies?.splice(movies.indexOf(movie), 1);
      dialogRef.close();
    }
  }

  addMovie<T>(movieF: FormGroup, dialogRef: MatDialogRef<T>): void {
    if (movieF.valid) {
      this.movieLists.find(
        (movieList) => movieList.id === movieF.value.status
      )?.movies.push({ id: Date.now(), ...movieF.value });
      dialogRef.close();
    }
  }
}
