import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MOCK_MOVIES } from 'src/app/mock-movies';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { movie: Movie },
    private dialogRef: MatDialogRef<MovieDetailsComponent>
  ) {}

  deleteMovie(): void {
    if (confirm('Are you sure you want to delete this movie')) {
      const movies = MOCK_MOVIES.find(
        (movieList) => movieList.id === this.data.movie.status
      )?.movies;
      movies?.splice(movies.indexOf(this.data.movie), 1);
      this.dialogRef.close();
    }
  }
}
