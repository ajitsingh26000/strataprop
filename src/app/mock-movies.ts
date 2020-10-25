import { MList } from './models';
import { MovieStatus } from './enums';

export const MOCK_MOVIES: MList[] = [
  {
    id: MovieStatus.WATCH,
    title: 'To Watch',
    movies: [
      {
        id: '0001',
        status: MovieStatus.WATCH,
        title: 'The Shawshank Redemption',
        details:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: '5',
      },
      {
        id: '0002',
        status: MovieStatus.WATCH,
        title: 'The Godfather',
        details:
          'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        rating: '4',
      },
    ],
  },
  {
    id: MovieStatus.IN_PROGRESS,
    title: 'In Progress',
    movies: [
      {
        id: '0003',
        status: MovieStatus.IN_PROGRESS,
        title: 'The Godfather: Part II',
        details:
          'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        rating: '3',
      },
    ],
  },
  {
    id: MovieStatus.WATCHED,
    title: 'Watched',
    movies: [
      {
        id: '0004',
        status: MovieStatus.WATCHED,
        title: '12 Angry Men',
        details: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        rating: '1',
      },
    ],
  },
  {
    id: MovieStatus.REVIEWED,
    title: 'Reviewed',
    movies: [
      {
        id: '0005',
        status: MovieStatus.REVIEWED,
        title: 'The Dark Knight',
        details:
          'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: '2',
      },
    ],
  },
];
