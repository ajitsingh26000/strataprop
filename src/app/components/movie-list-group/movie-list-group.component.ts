import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_MOVIES } from 'src/app/mock-movies';
import { MList } from 'src/app/models';
import { CreateMovieComponent } from '../create-movie/create-movie.component';

@Component({
  selector: 'app-movie-list-group',
  templateUrl: './movie-list-group.component.html',
  styleUrls: ['./movie-list-group.component.scss'],
})
export class MovieListGroupComponent{
  movieLists: MList[] = MOCK_MOVIES;
  constructor(public dialog: MatDialog) {}

  openCreateMovie(): void {
    const dialogRef = this.dialog.open(CreateMovieComponent);
  }
}
