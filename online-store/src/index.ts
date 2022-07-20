import { data } from './ts/phonesData';
import { valueObjFromLocalStorage } from './ts/data';
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

//Get values from Local Storage
const getValuesFromLocalStorage = () => {
  getLocalStorage();
  drawCardsCount(valueObjFromLocalStorage.activeCards.length);
  filterCardsByManufacturer();
};

const addWindowBeforeunloadHandler = () => {
  window.addEventListener('beforeunload', setLocalStorage);
};

window.onload = function () {
  //Set Local Storage
  addWindowBeforeunloadHandler();

  // Render Cards
  if (data) {
    renderCardsToDom();
  }

  //Filters handlers
  addManufacturerClickHandler();
  addCamerasClickHandler();
  addColorsClickHandler();
  addIsPopularClickHandler();

  //Sort handlers
  addSortHandler();

  //Cards handlers
  addCardClickHandler();

  //Range Filters
  getAmountRangeValues();
  getYearRangeValues();

  //Search Handler
  addSearchHandler();
  addClearIconHandler();

  //Reset Handler
  addResetHandler();
  addResetSettingsHandler();
};

window.addEventListener('load', getValuesFromLocalStorage);
