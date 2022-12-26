/* eslint-disable max-lines-per-function */
import { VALUES_FOR_LOCAL_STORAGE, VALUES_FROM_LOCAL_STORAGE } from './data';

export const addActiveClass = () => {
  VALUES_FOR_LOCAL_STORAGE.activeCards = VALUES_FROM_LOCAL_STORAGE.activeCards;
  const manufacturers = document.querySelectorAll('.manufacturer-list .button');
  const cameras = document.querySelectorAll('.camera-amount .button');
  const colors = document.querySelectorAll('.colors .button');
  const popularInput = document.querySelector('#popular-input');
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

  const yearInput = document.querySelectorAll('.store-content__year-numbers');
  const progressYear = document.querySelector('.year-slider .year-progress');
  const minValueBoxYear = document.querySelector(
    '.year-slider .year-value_min'
  );
  const maxValueBoxYear = document.querySelector(
    '.year-slider .year-value_max'
  );

  yearInput[0].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();
  yearInput[1].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();
  (document.getElementsByClassName(
    'year-range-min'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();
  (document.getElementsByClassName(
    'year-range-max'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();

  (progressYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0] - 2000) * 100) / 22
  )}%`;

  (minValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0] - 2000) * 100) / 22
  )}%`;

  (minValueBoxYear as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0].toString();

  (progressYear as HTMLDivElement).style.right = `${
    100 -
    Math.trunc(
      ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1] - 2000) * 100) / 22
    )
  }%`;

  (maxValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1] - 2000) * 100) / 22
  )}%`;
  (maxValueBoxYear as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1].toString();
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[0] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.year[1] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.year[1];

  if (VALUES_FROM_LOCAL_STORAGE.filterSettings.isPopular === 'true') {
    (popularInput as HTMLInputElement).checked = true;
  }

  amountInput[0].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  amountInput[1].innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();
  (document.getElementsByClassName(
    'amount-range-min'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  (document.getElementsByClassName(
    'amount-range-max'
  )[0] as HTMLInputElement).value = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();

  (progress as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0] * 100) / 20
  )}%`;

  (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0] * 100) / 20
  )}%`;
  (minValueBox as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0].toString();
  (progress as HTMLDivElement).style.right = `${
    100 -
    Math.trunc((+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1] * 100) / 20)
  }%`;

  (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1] * 100) / 20
  )}%`;
  (maxValueBox as HTMLDivElement).innerHTML = VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1].toString();
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[0] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[0];
  VALUES_FOR_LOCAL_STORAGE.rangeSettings.amount[1] =
    VALUES_FROM_LOCAL_STORAGE.rangeSettings.amount[1];

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

  const sortOptions = document.getElementById('sort');
  (sortOptions as HTMLSelectElement).value =
    VALUES_FROM_LOCAL_STORAGE.sortingScheme;

  VALUES_FOR_LOCAL_STORAGE.sortingScheme =
    VALUES_FROM_LOCAL_STORAGE.sortingScheme;

  VALUES_FOR_LOCAL_STORAGE.filterSettings.colors =
    VALUES_FROM_LOCAL_STORAGE.filterSettings.colors;

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
