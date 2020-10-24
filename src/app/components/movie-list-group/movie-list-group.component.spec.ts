import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListGroupComponent } from './movie-list-group.component';

describe('MovieListGroupComponent', () => {
  let component: MovieListGroupComponent;
  let fixture: ComponentFixture<MovieListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
