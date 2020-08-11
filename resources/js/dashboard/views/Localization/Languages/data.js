import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Engilsh',
    code: 'en',
    direction: 'ltr',
    display_front: 'yes'
  },
  {
    id: uuid(),
    name: 'Arabic',
    code: 'ar',
    direction: 'rtl',
    display_front: 'no'
  },
];
