/* eslint-disable max-lines-per-function */
import {
  VALUES_DEFAULT,
  VALUES_FOR_LOCAL_STORAGE,
  VALUES_FROM_LOCAL_STORAGE,
} from '../../store/data';

const handleYearInput = () => {
  const yearInput = document.querySelectorAll('.store-content__year-numbers');
  const progressYear = document.querySelector('.year-slider .year-progress');
  const minValueBoxYear = document.querySelector(
    '.year-slider .year-value_min'
  );
  const maxValueBoxYear = document.querySelector(
    '.year-slider .year-value_max'
  );
  const startYear = +VALUES_DEFAULT.rangeSettings.year[0];
  const yearGap =
    +VALUES_DEFAULT.rangeSettings.year[1] -
    +VALUES_DEFAULT.rangeSettings.year[0];

  yearInput[0].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();
  yearInput[1].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();
  (document.getElementsByClassName(
    'year-range-min'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();
  (document.getElementsByClassName(
    'year-range-max'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();

  (progressYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0] - startYear) * 100) /
      yearGap
  )}%`;

  (minValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0] - startYear) * 100) /
      yearGap
  )}%`;
  (minValueBoxYear as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();

  (progressYear as HTMLDivElement).style.right = `${
    100 -
    Math.trunc(
      ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1] - startYear) * 100) /
        yearGap
    )
  }%`;

  (maxValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1] - startYear) * 100) /
      yearGap
  )}%`;
  (maxValueBoxYear as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[0] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[1] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1];
};

const handleAmountInput = () => {
  const amountInput = document.querySelectorAll(
    '.store-content__amount-numbers'
  );
  const progress = document.querySelector('.amount-slider .amount-progress');
  const minValueBox = document.querySelector(
    '.amount-slider .amount-value_min'
  );
  const maxValueBox = document.querySelector(
    '.amount-slider .amount-value_max'
  );
  const amountGap =
    +VALUES_DEFAULT.rangeSettings.amount[1] -
    +VALUES_DEFAULT.rangeSettings.amount[0];

  amountInput[0].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  amountInput[1].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();
  (document.getElementsByClassName(
    'amount-range-min'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  (document.getElementsByClassName(
    'amount-range-max'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();

  (progress as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0] * 100) / amountGap
  )}%`;

  (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0] * 100) / amountGap
  )}%`;
  (minValueBox as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  (progress as HTMLDivElement).style.right = `${
    100 -
    Math.trunc(
      (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1] * 100) / amountGap
    )
  }%`;

  (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1] * 100) / amountGap
  )}%`;
  (maxValueBox as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[0] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[1] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1];
};

const handleManufacturerFilter = () => {
  const manufacturers = document.querySelectorAll('.manufacturer-list .button');
  for (let i = 0; i < manufacturers.length; i++) {
    for (
      let j = 0;
      j < VALUES_FROM_LOCAL_STORAGE.filterSettings.manufacturer.length;
      j++
    ) {
      if (
        manufacturers[i].classList.contains(
          VALUES_FROM_LOCAL_STORAGE.filterSettings.manufacturer[j]
        )
      ) {
        manufacturers[i].classList.add('active');
      }
    }
  }
  VALUES_FOR_LOCAL_STORAGE.filterSettings.manufacturer = JSON.parse(
    JSON.stringify(VALUES_FROM_LOCAL_STORAGE.filterSettings.manufacturer)
  ) as Array<string>;
};

const handleCamerasFilter = () => {
  const cameras = document.querySelectorAll('.camera-amount .button');

  for (let i = 0; i < cameras.length; i++) {
    for (
      let j = 0;
      j < VALUES_FROM_LOCAL_STORAGE.filterSettings.cameras.length;
      j++
    ) {
      const cameraAttr = cameras[i].getAttribute('data-camera');
      if (cameraAttr === VALUES_FROM_LOCAL_STORAGE.filterSettings.cameras[j]) {
        cameras[i].classList.add('active');
      }
    }
  }
  VALUES_FOR_LOCAL_STORAGE.filterSettings.cameras = JSON.parse(
    JSON.stringify(VALUES_FROM_LOCAL_STORAGE.filterSettings.cameras)
  ) as Array<string>;
};

const handlePopularFilter = () => {
  const popularInput = document.querySelector('#popular-input');
  if (VALUES_FROM_LOCAL_STORAGE.filterSettings.isPopular === 'true') {
    (popularInput as HTMLInputElement).checked = true;
  }
};

const handleColorsFilter = () => {
  const colors = document.querySelectorAll('.colors .button');
  for (let i = 0; i < colors.length; i++) {
    for (
      let j = 0;
      j < VALUES_FROM_LOCAL_STORAGE.filterSettings.colors.length;
      j++
    ) {
      if (
        colors[i].classList.contains(
          VALUES_FROM_LOCAL_STORAGE.filterSettings.colors[j]
        )
      ) {
        colors[i].classList.add('active');
      }
    }
  }
  VALUES_FOR_LOCAL_STORAGE.filterSettings.colors =
    VALUES_FROM_LOCAL_STORAGE.filterSettings.colors;
};

const handleSort = () => {
  const sortOptions = document.getElementById('sort');
  (sortOptions as HTMLSelectElement).value =
    VALUES_FROM_LOCAL_STORAGE.sortingScheme;

  VALUES_FOR_LOCAL_STORAGE.sortingScheme =
    VALUES_FROM_LOCAL_STORAGE.sortingScheme;
};

const handleCardsInBasket = () => {
  VALUES_FOR_LOCAL_STORAGE.activeCards = VALUES_FROM_LOCAL_STORAGE.activeCards;
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item'
  );
  cards.forEach((card) => {
    VALUES_FROM_LOCAL_STORAGE.activeCards.forEach((item: string) => {
      if (card.getAttribute('data-id') === item) {
        card.classList.add('active');
      }
    });
  });
};

export const addActiveClass = () => {
  handleYearInput();
  handleAmountInput();
  handlePopularFilter();
  handleManufacturerFilter();
  handleCamerasFilter();
  handleColorsFilter();
  handleSort();
  handleCardsInBasket();
};
