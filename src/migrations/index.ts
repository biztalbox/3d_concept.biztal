import * as migration_20260522_183457_initial from './20260522_183457_initial';

export const migrations = [
  {
    up: migration_20260522_183457_initial.up,
    down: migration_20260522_183457_initial.down,
    name: '20260522_183457_initial'
  },
];
