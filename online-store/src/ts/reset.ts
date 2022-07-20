import { valueObjDefault, valueObjForLocalStorage } from './data';

//Reset Handler
const resetValues = () => {
  valueObjForLocalStorage.rangeSettings.amount[0] =
    valueObjDefault.rangeSettings.amount[0];
  valueObjForLocalStorage.rangeSettings.amount[1] =
    valueObjDefault.rangeSettings.amount[1];
  valueObjForLocalStorage.rangeSettings.year[0] =
    valueObjDefault.rangeSettings.year[0];
  valueObjForLocalStorage.rangeSettings.year[1] =
    valueObjDefault.rangeSettings.year[1];
  valueObjForLocalStorage.filterSettings.manufacturer =
    valueObjDefault.filterSettings.manufacturer;
  valueObjForLocalStorage.filterSettings.cameras =
    valueObjDefault.filterSettings.cameras;
  valueObjForLocalStorage.filterSettings.colors =
    valueObjDefault.filterSettings.colors;
  valueObjForLocalStorage.filterSettings.isPopular =
    valueObjDefault.filterSettings.isPopular;
};

export const addResetHandler = () => {
  document
    .querySelector('.store-content__reset .filters')
    ?.addEventListener('click', () => {
      resetValues();
      window.location.reload();
    });
};

export const addResetSettingsHandler = () => {
  document
    .querySelector('.store-content__reset .settings')
    ?.addEventListener('click', () => {
      valueObjForLocalStorage.activeCards = valueObjDefault.activeCards;
      valueObjForLocalStorage.sortingScheme = valueObjDefault.sortingScheme;
      resetValues();
      window.location.reload();
    });
};
