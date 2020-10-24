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
        title: 'Behind the 900 stars - Update 08/2020',
        details: 'sdhkj',
        rating: '5',
      },
      {
        id: '0002',
        status: MovieStatus.WATCH,
        title: 'Who is the author of Angular Jira clone?',
        details: 'sdhkj',
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
        title: 'Set up Akita state management',
        details: 'sdhkj',
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
        title: 'Preparing backend API with GraphQL',
        details: 'sdhkj',
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
        title: 'Preparing backend API with GraphQL',
        details: 'sdhkj',
        rating: '2',
      },
    ],
  },
];
