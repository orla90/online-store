import { phonesData } from './ts/phonesData';
import { VALUES_FROM_LOCAL_STORAGE } from './ts/data';
import { addResetHandler, addResetSettingsHandler } from './ts/reset';
import { setLocalStorage, getLocalStorage } from './ts/localStorage';
import { addClearIconHandler, addSearchHandler } from './ts/search';
import { filterCardsByManufacturer } from './ts/filters';
import {
  addCamerasClickHandler,
  addCardClickHandler,
  addColorsClickHandler,
  addIsPopularClickHandler,
  addManufacturerClickHandler,
  addSortHandler,
} from './ts/handlers';
import { drawCardsCount, renderCardsToDom } from './ts/generateCards';
import { getAmountRangeValues, getYearRangeValues } from './ts/rangeInputs';

const getValuesFromLocalStorage = () => {
  getLocalStorage();
  drawCardsCount(VALUES_FROM_LOCAL_STORAGE.activeCards.length);
  filterCardsByManufacturer();
};

const addWindowBeforeunloadHandler = () => {
  window.addEventListener('beforeunload', setLocalStorage);
};

window.onload = function () {
  addWindowBeforeunloadHandler();

  if (phonesData) {
    renderCardsToDom();
  }

  addManufacturerClickHandler();
  addCamerasClickHandler();
  addColorsClickHandler();
  addIsPopularClickHandler();
  addSortHandler();
  addCardClickHandler();
  getAmountRangeValues();
  getYearRangeValues();
  addSearchHandler();
  addClearIconHandler();
  addResetHandler();
  addResetSettingsHandler();
};

window.addEventListener('load', getValuesFromLocalStorage);
