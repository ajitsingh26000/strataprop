import {
  CdkDragDrop
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() dropEvent = new EventEmitter<CdkDragDrop<Movie[]>>();
  constructor(private dialog: MatDialog) {}

  showDetails(data: Movie): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        movie: data,
      },
    });
  }
}
