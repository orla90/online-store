import { VALUES_DEFAULT, VALUES_FOR_LOCAL_STORAGE } from '../../store/data';

const resetValues = () => {
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[0] =
    VALUES_DEFAULT.rangeSettings.amount[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[1] =
    VALUES_DEFAULT.rangeSettings.amount[1];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[0] =
    VALUES_DEFAULT.rangeSettings.year[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[1] =
    VALUES_DEFAULT.rangeSettings.year[1];
  VALUES_FOR_LOCAL_STORAGE.filterSettings.manufacturer =
    VALUES_DEFAULT.filterSettings.manufacturer;
  VALUES_FOR_LOCAL_STORAGE.filterSettings.cameras =
    VALUES_DEFAULT.filterSettings.cameras;
  VALUES_FOR_LOCAL_STORAGE.filterSettings.colors =
    VALUES_DEFAULT.filterSettings.colors;
  VALUES_FOR_LOCAL_STORAGE.filterSettings.isPopular =
    VALUES_DEFAULT.filterSettings.isPopular;
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
      VALUES_FOR_LOCAL_STORAGE.activeCards = VALUES_DEFAULT.activeCards;
      VALUES_FOR_LOCAL_STORAGE.sortingScheme = VALUES_DEFAULT.sortingScheme;
      resetValues();
      window.location.reload();
    });
};
