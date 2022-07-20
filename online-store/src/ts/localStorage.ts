//Add Local Storage and add "active" class for values from LS
import { valueObjForLocalStorage, valueObjFromLocalStorage } from './data';
import { FiltersData, RangesData } from './Interface';

export const setLocalStorage = () => {
  localStorage.setItem(
    'filterSettings',
    JSON.stringify(valueObjForLocalStorage.filterSettings),
  );
  localStorage.setItem(
    'rangeSettings',
    JSON.stringify(valueObjForLocalStorage.rangeSettings),
  );
  localStorage.setItem('sortingScheme', valueObjForLocalStorage.sortingScheme);
  localStorage.setItem(
    'activeCards',
    JSON.stringify(valueObjForLocalStorage.activeCards),
  );
};

export const addActiveClass = () => {
  valueObjForLocalStorage.activeCards = valueObjFromLocalStorage.activeCards;
  const manufacturers = document.querySelectorAll('.manufacturer-list .button');
  const cameras = document.querySelectorAll('.camera-amount .button');
  const colors = document.querySelectorAll('.colors .button');
  const popularInput = document.querySelector('#popular-input');
  const amountInput = document.querySelectorAll(
    '.store-content__amount-numbers',
  );
  const progress = document.querySelector('.amount-slider .amount-progress');
  const minValueBox = document.querySelector(
    '.amount-slider .amount-value_min',
  );
  const maxValueBox = document.querySelector(
    '.amount-slider .amount-value_max',
  );

  const yearInput = document.querySelectorAll('.store-content__year-numbers');
  const progressYear = document.querySelector('.year-slider .year-progress');
  const minValueBoxYear = document.querySelector(
    '.year-slider .year-value_min',
  );
  const maxValueBoxYear = document.querySelector(
    '.year-slider .year-value_max',
  );

  yearInput[0].innerHTML = valueObjFromLocalStorage.rangeSettings.year[0].toString();
  yearInput[1].innerHTML = valueObjFromLocalStorage.rangeSettings.year[1].toString();

  (progressYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.rangeSettings.year[0] - 2000) * 100) / 22,
  )}%`;

  (minValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.rangeSettings.year[0] - 2000) * 100) / 22,
  )}%`;

  (minValueBoxYear as HTMLDivElement).innerHTML = valueObjFromLocalStorage.rangeSettings.year[0].toString();

  (progressYear as HTMLDivElement).style.right = `${
    100 -
    Math.trunc(
      ((+valueObjFromLocalStorage.rangeSettings.year[1] - 2000) * 100) / 22,
    )
  }%`;

  (maxValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.rangeSettings.year[1] - 2000) * 100) / 22,
  )}%`;
  (maxValueBoxYear as HTMLDivElement).innerHTML = valueObjFromLocalStorage.rangeSettings.year[1].toString();
  valueObjForLocalStorage.rangeSettings.year[0] =
    valueObjFromLocalStorage.rangeSettings.year[0];

  if (valueObjFromLocalStorage.filterSettings.isPopular === 'true') {
    (popularInput as HTMLInputElement).checked = true;
  }

  amountInput[0].innerHTML = valueObjFromLocalStorage.rangeSettings.amount[0].toString();
  amountInput[1].innerHTML = valueObjFromLocalStorage.rangeSettings.amount[1].toString();

  (progress as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.rangeSettings.amount[0] * 100) / 20,
  )}%`;

  (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.rangeSettings.amount[0] * 100) / 20,
  )}%`;
  (minValueBox as HTMLDivElement).innerHTML = valueObjFromLocalStorage.rangeSettings.amount[0].toString();
  (progress as HTMLDivElement).style.right = `${
    100 -
    Math.trunc((+valueObjFromLocalStorage.rangeSettings.amount[1] * 100) / 20)
  }%`;

  (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.rangeSettings.amount[1] * 100) / 20,
  )}%`;
  (maxValueBox as HTMLDivElement).innerHTML = valueObjFromLocalStorage.rangeSettings.amount[1].toString();
  valueObjForLocalStorage.rangeSettings.amount[0] =
    valueObjFromLocalStorage.rangeSettings.amount[0];
  valueObjForLocalStorage.rangeSettings.amount[1] =
    valueObjFromLocalStorage.rangeSettings.amount[1];

  for (let i = 0; i < manufacturers.length; i++) {
    for (
      let j = 0;
      j < valueObjFromLocalStorage.filterSettings.manufacturer.length;
      j++
    ) {
      if (
        manufacturers[i].classList.contains(
          valueObjFromLocalStorage.filterSettings.manufacturer[j],
        )
      ) {
        manufacturers[i].classList.add('active');
      }
    }
  }

  valueObjForLocalStorage.filterSettings.manufacturer = JSON.parse(
    JSON.stringify(valueObjFromLocalStorage.filterSettings.manufacturer),
  ) as Array<string>;

  for (let i = 0; i < cameras.length; i++) {
    for (
      let j = 0;
      j < valueObjFromLocalStorage.filterSettings.cameras.length;
      j++
    ) {
      const cameraAttr = cameras[i].getAttribute('data-camera');
      if (cameraAttr === valueObjFromLocalStorage.filterSettings.cameras[j]) {
        cameras[i].classList.add('active');
      }
    }
  }

  valueObjForLocalStorage.filterSettings.cameras = JSON.parse(
    JSON.stringify(valueObjFromLocalStorage.filterSettings.cameras),
  ) as Array<string>;

  for (let i = 0; i < colors.length; i++) {
    for (
      let j = 0;
      j < valueObjFromLocalStorage.filterSettings.colors.length;
      j++
    ) {
      if (
        colors[i].classList.contains(
          valueObjFromLocalStorage.filterSettings.colors[j],
        )
      ) {
        colors[i].classList.add('active');
      }
    }
  }

  const sortOptions = document.getElementById('sort');
  (sortOptions as HTMLSelectElement).value =
    valueObjFromLocalStorage.sortingScheme;

  valueObjForLocalStorage.sortingScheme =
    valueObjFromLocalStorage.sortingScheme;

  valueObjForLocalStorage.filterSettings.colors =
    valueObjFromLocalStorage.filterSettings.colors;

  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );
  cards.forEach((card) => {
    valueObjFromLocalStorage.activeCards.forEach((item: string) => {
      if (card.getAttribute('data-id') === item) {
        card.classList.add('active');
      }
    });
  });
};

export const getLocalStorage = () => {
  if (localStorage.getItem('filterSettings')) {
    valueObjFromLocalStorage.filterSettings = JSON.parse(
      localStorage.getItem('filterSettings')!,
    ) as FiltersData;
  }
  if (localStorage.getItem('rangeSettings')) {
    valueObjFromLocalStorage.rangeSettings = JSON.parse(
      localStorage.getItem('rangeSettings')!,
    ) as RangesData;
  }
  if (localStorage.getItem('activeCards')) {
    valueObjFromLocalStorage.activeCards = JSON.parse(
      localStorage.getItem('activeCards')!,
    ) as string[];
  }
  if (localStorage.getItem('sortingScheme')) {
    valueObjFromLocalStorage.sortingScheme = localStorage.getItem(
      'sortingScheme',
    )!;
  }

  addActiveClass();
};
