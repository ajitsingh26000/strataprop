import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMovieComponent {
  movieF = new FormGroup({
    title: new FormControl('', Validators.required),
    status: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  });
  constructor(
    public dialogRef: MatDialogRef<CreateMovieComponent>,
    public movieS: MovieService
  ) {}

}
