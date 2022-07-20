import { valueObjForLocalStorage } from './data';
import { sortCards } from './sort';

//Add Filters
export const filterCardsByYear = (cardsArr: Array<Element>) => {
  cardsArr.forEach((card) => {
    if (!card.classList.contains('store-content__item_hidden')) {
      card.classList.add('store-content__item_hidden');
    }
  });
  cardsArr.forEach((card) => {
    const year = (card.querySelector('.year-prop') as HTMLDivElement).innerText;
    if (
      parseInt(year) >= +valueObjForLocalStorage.rangeSettings.year[0] &&
      parseInt(year) <= +valueObjForLocalStorage.rangeSettings.year[1]
    ) {
      card.classList.remove('store-content__item_hidden');
    }
  });
  sortCards(cardsArr);
};

export const filterCardsByAmount = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );
  cardsArr.forEach((card) => {
    if (!card.classList.contains('store-content__item_hidden')) {
      card.classList.add('store-content__item_hidden');
    }
  });

  cardsArr.forEach((card) => {
    const amount = (card.querySelector('.amount-prop') as HTMLDivElement)
      .innerText;
    if (
      parseInt(amount) >= +valueObjForLocalStorage.rangeSettings.amount[0] &&
      parseInt(amount) <= +valueObjForLocalStorage.rangeSettings.amount[1]
    ) {
      card.classList.remove('store-content__item_hidden');
    }
  });
  const cardsFilteredByAmount = Array.from(cards).filter(
    (card) => !card.classList.contains('store-content__item_hidden'),
  );
  filterCardsByYear(cardsFilteredByAmount);
};

export const filterCardsByIsPopular = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );

  const isPopularButtonChecked = document.querySelectorAll(
    '#popular-input:checked',
  );

  valueObjForLocalStorage.filterSettings.isPopular = 'false';

  if (isPopularButtonChecked.length !== 0) {
    valueObjForLocalStorage.filterSettings.isPopular = 'true';

    cardsArr.forEach((card) => {
      if (!card.classList.contains('store-content__item_hidden')) {
        card.classList.add('store-content__item_hidden');
      }
    });

    cardsArr.forEach((card) => {
      const isPopularProp = (card.querySelector(
        '.popular-prop',
      ) as HTMLDivElement).innerText;
      if (isPopularProp === 'да') {
        card.classList.remove('store-content__item_hidden');
      }
    });
    const cardsFilteredByIsPopular = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    filterCardsByAmount(cardsFilteredByIsPopular);
  } else {
    valueObjForLocalStorage.filterSettings.isPopular = 'false';
    filterCardsByAmount(cardsArr);
  }
};

export const filterCardsByColors = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );

  const colorsButtons = document.querySelectorAll('.colors .button_color');

  const activeColorsButtons = document.querySelectorAll(
    '.colors .button_color.active',
  );

  if (activeColorsButtons.length !== 0) {
    cardsArr.forEach((card) => {
      if (!card.classList.contains('store-content__item_hidden')) {
        card.classList.add('store-content__item_hidden');
      }
    });

    colorsButtons.forEach((colorsButton) => {
      if (colorsButton.classList.contains('active')) {
        cardsArr.forEach((card) => {
          const colorProp = (card.querySelector(
            '.color-prop',
          ) as HTMLDivElement).innerText;
          if ((colorsButton as HTMLDivElement).innerText === colorProp) {
            card.classList.remove('store-content__item_hidden');
          }
        });
      }
    });

    const cardsFilteredByColors = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    filterCardsByIsPopular(cardsFilteredByColors);
  } else {
    filterCardsByIsPopular(cardsArr);
  }
};

export const filterCardsByCameras = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );

  const camerasButtons = document.querySelectorAll(
    '.camera-amount .button_camera',
  );

  const activeCameraButtons = document.querySelectorAll(
    '.camera-amount .button_camera.active',
  );

  if (activeCameraButtons.length !== 0) {
    cardsArr.forEach((card) => {
      if (!card.classList.contains('store-content__item_hidden')) {
        card.classList.add('store-content__item_hidden');
      }
    });

    camerasButtons.forEach((cameraButton) => {
      if (cameraButton.classList.contains('active')) {
        cardsArr.forEach((card) => {
          const cameraProp = (card.querySelector(
            '.camera-prop',
          ) as HTMLDivElement).innerText;
          if ((cameraButton as HTMLDivElement).innerText === cameraProp) {
            card.classList.remove('store-content__item_hidden');
          }
        });
      }
    });

    const cardsFilteredByCameras = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    filterCardsByColors(cardsFilteredByCameras);
  } else {
    filterCardsByColors(cardsArr);
  }
};

export const filterCardsByManufacturer = () => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );

  const manufacturerButtons = document.querySelectorAll(
    '.manufacturer-list .button_manufacturer',
  );
  const activeManufacturerButtons = document.querySelectorAll(
    '.manufacturer-list .button_manufacturer.active',
  );

  if (activeManufacturerButtons.length !== 0) {
    cards.forEach((card) => {
      card.classList.add('store-content__item_hidden');
    });

    manufacturerButtons.forEach((manufacturerButton) => {
      if (manufacturerButton.classList.contains('active')) {
        cards.forEach((card) => {
          const manufacturerProp = (card.querySelector(
            '.manufacturer-prop',
          ) as HTMLDivElement).innerText;
          if (
            (manufacturerButton as HTMLDivElement).innerText ===
            manufacturerProp
          ) {
            card.classList.remove('store-content__item_hidden');
          }
        });
      }
    });

    const cardsFilteredByManufacturer = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );

    filterCardsByCameras(cardsFilteredByManufacturer);
  } else {
    cards.forEach((card) => {
      card.classList.remove('store-content__item_hidden');
    });

    filterCardsByCameras(Array.from(cards));
  }
};
