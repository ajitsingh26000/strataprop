import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MList, Movie } from 'src/app/models';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movieList!: MList;
  constructor(public dialog: MatDialog) {}

  showDetails(data: Movie): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      data: {
        movie: data,
      },
    });
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
