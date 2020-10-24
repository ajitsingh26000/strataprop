import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MOCK_MOVIES } from 'src/app/mock-movies';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent {
  movieF = new FormGroup({
    title: new FormControl('', Validators.required),
    status: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  });
  constructor(public dialogRef: MatDialogRef<CreateMovieComponent>) {}


  addMovie(): void {
    if (this.movieF.valid) {
      MOCK_MOVIES.find(
        (movieList) => movieList.id === this.movieF.value.status
      )?.movies.push({ id: Date.now(), ...this.movieF.value });
      this.dialogRef.close();
    }
  }
}
