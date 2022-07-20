import { valueObjForLocalStorage } from './data';
import { filterCardsByManufacturer } from './filters';
import { selectClickedCard } from './generateCards';
import { generateBasketModal } from './generateModalWindows';
import {
  selectClickedCameraFilter,
  selectClickedColorFilter,
  selectClickedManufacturerFilter,
} from './selectFilters';

// Add Filters Handlers
export const addManufacturerClickHandler = () => {
  document
    .querySelector('.manufacturer-list')
    ?.addEventListener('click', (e) => {
      if (
        (e.target as HTMLDivElement).classList.contains('button_manufacturer')
      ) {
        const clickedManufacturerFilter = e.target;
        selectClickedManufacturerFilter(clickedManufacturerFilter);
      }
    });
};

export const addCamerasClickHandler = () => {
  document.querySelector('.camera-amount')?.addEventListener('click', (e) => {
    if ((e.target as HTMLDivElement).classList.contains('button_camera')) {
      const clickedCameraFilter = e.target;
      selectClickedCameraFilter(clickedCameraFilter);
    }
  });
};

export const addColorsClickHandler = () => {
  document.querySelector('.colors')?.addEventListener('click', (e) => {
    if ((e.target as HTMLDivElement).classList.contains('button_color')) {
      const clickedColorFilter = e.target;
      selectClickedColorFilter(clickedColorFilter);
    }
  });
};

export const addIsPopularClickHandler = () => {
  document.querySelector('#popular-input')?.addEventListener('click', () => {
    filterCardsByManufacturer();
  });
};

//Add Sort Handler
export const addSortHandler = () => {
  const sortOptions = document.getElementById('sort');
  sortOptions?.addEventListener(
    'change',
    function () {
      valueObjForLocalStorage.sortingScheme = (this as HTMLSelectElement).value;
      filterCardsByManufacturer();
    },
    false,
  );
};

//Add Cards Handler
export const addCardClickHandler = () => {
  document.querySelectorAll('.store-content__item').forEach((item) => {
    item?.addEventListener('click', (e) => {
      const clickedCards = document.querySelectorAll(
        '.store-content__item.active',
      );
      const clickedCard = e.currentTarget;
      if (
        clickedCards.length < 20 ||
        (clickedCard as HTMLDivElement).classList.contains('active')
      ) {
        selectClickedCard(clickedCard);
      } else {
        generateBasketModal();
      }
    });
  });
};
