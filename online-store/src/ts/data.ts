import { StorageData } from './Interface';

export const VALUES_DEFAULT = {
  filterSettings: {
    manufacturer: [],
    cameras: [],
    colors: [],
    isPopular: 'false',
  },
  rangeSettings: {
    amount: ['1', '20'],
    year: ['2000', '2022'],
  },
  sortingScheme: 'sort-by-name-desc',
  activeCards: [],
};

export const VALUES_FOR_LOCAL_STORAGE = JSON.parse(
  JSON.stringify(VALUES_DEFAULT),
) as StorageData;

export const VALUES_FROM_LOCAL_STORAGE = JSON.parse(
  JSON.stringify(VALUES_DEFAULT),
) as StorageData;
