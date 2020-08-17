import {
  data,
  dataBubble,
  dataMixed,
  gridOptions,
  height,
  options,
  sharedOptions,
  stackedGridOptions
} from './chart';

export default [
  {
    type: 'bar',
    title: 'Questions Answered Right Leaderboard',
    subtitle: '(Questions Answered here)',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Quizzes scored 100%',
    subtitle: '(number here)',
    data: dataMixed,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...options
    }
  },
  {
    type: 'bubble',
    title: 'Quizzes taken',
    subtitle: '(number here)',
    data: dataBubble,
    height: height,
    options: {
      ...sharedOptions
    }
  }
];
