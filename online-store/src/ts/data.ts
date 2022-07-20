import { StorageData } from './Interface';

export const valueObjDefault = {
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

export const valueObjForLocalStorage = JSON.parse(
  JSON.stringify(valueObjDefault),
) as StorageData;

export const valueObjFromLocalStorage = JSON.parse(
  JSON.stringify(valueObjDefault),
) as StorageData;
