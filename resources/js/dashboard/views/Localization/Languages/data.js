import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Engilsh',
    code: 'en',
    direction: 'ltr',
    default: 'yes'
  },
  {
    id: uuid(),
    name: 'Arabic',
    code: 'ar',
    direction: 'rtl',
    default: 'no'
  },
];
