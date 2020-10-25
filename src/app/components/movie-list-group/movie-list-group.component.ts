import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MList, Movie } from 'src/app/models';
import { MovieService } from 'src/app/services/movie.service';
import { CreateMovieComponent } from '../create-movie/create-movie.component';

@Component({
  selector: 'app-movie-list-group',
  templateUrl: './movie-list-group.component.html',
  styleUrls: ['./movie-list-group.component.scss'],
})
export class MovieListGroupComponent {
  movieLists: MList[] = this.movieS.movieLists;
  constructor(private dialog: MatDialog, private movieS: MovieService) {}

  openCreateMovie(): void {
    this.dialog.open(CreateMovieComponent);
  }

  drop(event: CdkDragDrop<Movie[]>): void {
    const isMovingInsideTheSameList =
      event.previousContainer === event.container;
    event.previousContainer.data[event.previousIndex] = {
      ...event.item.data,
      status: event.container.id,
    };
    if (isMovingInsideTheSameList) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const data = transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
