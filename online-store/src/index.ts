import { PHONES_DATA } from './phonesData';
import { VALUES_FROM_LOCAL_STORAGE } from './store/data';
import { addResetHandler, addResetSettingsHandler } from './ts/LS/reset';
import { setLocalStorage, getLocalStorage } from './ts/LS/localStorage';
import { addClearIconHandler, addSearchHandler } from './ts/functions/search';
import { filterCardsByManufacturer } from './ts/functions/filters';
import {
  addCamerasClickHandler,
  addCardClickHandler,
  addColorsClickHandler,
  addIsPopularClickHandler,
  addManufacturerClickHandler,
  addSortHandler,
} from './ts/functions/handlers';
import { drawCardsCount, renderCardsToDom } from './ts/card/generateCards';
import {
  getAmountRangeValues,
  getYearRangeValues,
} from './ts/functions/rangeInputs';

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

  if (PHONES_DATA) {
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
