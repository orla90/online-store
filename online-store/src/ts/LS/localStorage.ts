import { addActiveClass } from '../functions/addActiveClass';
import {
  VALUES_FOR_LOCAL_STORAGE,
  VALUES_FROM_LOCAL_STORAGE,
} from '../../store/data';
import { FiltersData, RangesData } from '../interfaces/Interface';

export const setLocalStorage = () => {
  localStorage.setItem(
    'filterSettings',
    JSON.stringify(VALUES_FOR_LOCAL_STORAGE.filterSettings)
  );
  localStorage.setItem(
    'rangeSettings',
    JSON.stringify(VALUES_FOR_LOCAL_STORAGE.rangeSettings)
  );
  localStorage.setItem('sortingScheme', VALUES_FOR_LOCAL_STORAGE.sortingScheme);
  localStorage.setItem(
    'activeCards',
    JSON.stringify(VALUES_FOR_LOCAL_STORAGE.activeCards)
  );
};

export const getLocalStorage = () => {
  if (localStorage.getItem('filterSettings')) {
    VALUES_FROM_LOCAL_STORAGE.filterSettings = JSON.parse(
      localStorage.getItem('filterSettings') as string
    ) as FiltersData;
  }
  if (localStorage.getItem('rangeSettings')) {
    VALUES_FROM_LOCAL_STORAGE.rangeSettings = JSON.parse(
      localStorage.getItem('rangeSettings') as string
    ) as RangesData;
  }
  if (localStorage.getItem('activeCards')) {
    VALUES_FROM_LOCAL_STORAGE.activeCards = JSON.parse(
      localStorage.getItem('activeCards') as string
    ) as string[];
  }
  if (localStorage.getItem('sortingScheme')) {
    VALUES_FROM_LOCAL_STORAGE.sortingScheme = localStorage.getItem(
      'sortingScheme'
    ) as string;
  }

  addActiveClass();
};
