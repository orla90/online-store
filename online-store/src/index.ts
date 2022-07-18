import { Card } from './ts/сard';
import { CardData, ObjData, OnlyKeys } from './ts/Interface';
import { data } from './ts/phonesData';
import { ErrorModal } from './ts/errorModal';

const valueObjDefault = {
  minAmountVal: '1',
  maxAmountVal: '20',
  minYearVal: '2000',
  maxYearVal: '2022',
  sortingScheme: 'sort-by-name-desc',
  samsung: 'false',
  apple: 'false',
  realme: 'false',
  xiaomi: 'false',
  fiveCameras: 'false',
  fourCameras: 'false',
  threeCameras: 'false',
  twoCameras: 'false',
  oneCamera: 'false',
  white: 'false',
  yellow: 'false',
  black: 'false',
  red: 'false',
  blue: 'false',
  isPopular: 'false',
  activeCards: [],
};

const valueObjForLocalStorage = (JSON.parse(JSON.stringify(valueObjDefault)) as ObjData);
const valueObjFromLocalStorage = (JSON.parse(JSON.stringify(valueObjDefault)) as ObjData);

//Generate Modal Windows
const renderErrorModalWindow = (urlToImg: string, text: string) => {
  const modal = new ErrorModal('modal', { urlToImg, text });
  modal.renderErrorModal();
};

const generateAbsentModal = () => {
  renderErrorModalWindow(
    '../src/assets/media/dog404.jpeg',
    'Извините, совпадений не обнаружено',
  );
};

const generateBasketModal = () => {
  renderErrorModalWindow(
    '../src/assets/media/dog.jpeg',
    'Извините, все слоты заполнены',
  );
};


// Add Sorting

const insertAfter = (elem: Element, refElem: Element) => {
  return refElem.parentNode?.insertBefore(elem, refElem.nextSibling);
};

const sortNumbersAsc = (parent: Element, attr: string) => {
  for (let i = 0; i < parent.children.length; i++) {
    for (let j = i; j < parent.children.length; j++) {
      if (
        +parent.children[i].getAttribute(attr)! >
        +parent.children[j].getAttribute(attr)!
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i],
        );
        insertAfter(replacedNode, parent.children[i]);
      }
    }
  }
};

const sortNumbersDesc = (parent: Element, attr: string) => {
  for (let i = 0; i < parent.children.length; i++) {
    for (let j = i; j < parent.children.length; j++) {
      if (
        +parent.children[i].getAttribute(attr)! <
        +parent.children[j].getAttribute(attr)!
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i],
        );
        insertAfter(replacedNode, parent.children[i]);
      }
    }
  }
};

const sortStringAsc = (parent: Element, attr: string) => {
  for (let i = 0; i < parent.children.length; i++) {
    for (let j = i; j < parent.children.length; j++) {
      if (
        parent.children[i].getAttribute(attr)! >
        parent.children[j].getAttribute(attr)!
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i],
        );
        insertAfter(replacedNode, parent.children[i]);
      }
    }
  }
};

const sortStringDesc = (parent: Element, attr: string) => {
  for (let i = 0; i < parent.children.length; i++) {
    for (let j = i; j < parent.children.length; j++) {
      if (
        parent.children[i].getAttribute(attr)! <
        parent.children[j].getAttribute(attr)!
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i],
        );
        insertAfter(replacedNode, parent.children[i]);
      }
    }
  }
};

const sortCards = (cardsArr: Array<Element>) => {
  const parent = document.querySelector('.store-content__wrapper') as Element;
  const filtered = cardsArr.filter(
    (card) =>
      !card.classList.contains('hide') &&
      !card.classList.contains('store-content__item_hidden'),
  );
  const overlay = document.querySelector('.overlay');

  if (filtered.length === 0 && !overlay) {
    generateAbsentModal();
  }

  if (valueObjForLocalStorage.sortingScheme === 'sort-by-name-asc') {
    sortStringAsc(parent, 'data-title');
  }

  if (valueObjForLocalStorage.sortingScheme === 'sort-by-name-desc') {
    sortStringDesc(parent, 'data-title');
  }

  if (valueObjForLocalStorage.sortingScheme === 'ascending-amount') {
    sortNumbersAsc(parent, 'data-amount');
  }

  if (valueObjForLocalStorage.sortingScheme === 'descending-amount') {
    sortNumbersDesc(parent, 'data-amount');
  }

  if (valueObjForLocalStorage.sortingScheme === 'ascending-year') {
    sortNumbersAsc(parent, 'data-year');
  }

  if (valueObjForLocalStorage.sortingScheme === 'descending-year') {
    sortNumbersDesc(parent, 'data-year');
  }
};

//Add Filters
const filterCardsByYear = (cardsArr: Array<Element>) => {
  
  cardsArr.forEach((card) => {
    if (!card.classList.contains('store-content__item_hidden')) {
      card.classList.add('store-content__item_hidden');
    }
  });
  cardsArr.forEach((card) => {
    console.log(card);
    const year = (card.querySelector('.year-prop') as HTMLDivElement).innerText;
    if (
      parseInt(year) >= +valueObjForLocalStorage.minYearVal &&
      parseInt(year) <= +valueObjForLocalStorage.maxYearVal
    ) {
      card.classList.remove('store-content__item_hidden');
    }
  });
  sortCards(cardsArr);
};

const filterCardsByAmount = (cardsArr: Array<Element>) => {
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
      parseInt(amount) >= +valueObjForLocalStorage.minAmountVal &&
      parseInt(amount) <= +valueObjForLocalStorage.maxAmountVal
    ) {
      card.classList.remove('store-content__item_hidden');
    }
  });
  const cardsFilteredByAmount = Array.from(cards).filter(
    (card) => !card.classList.contains('store-content__item_hidden'),
  );
  filterCardsByYear(cardsFilteredByAmount);
};


const filterCardsByIsPopular = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    '.layout-5-column .store-content__item',
  );

  const isPopularButtonChecked = document.querySelectorAll(
    '#popular-input:checked',
  );

  valueObjForLocalStorage.isPopular = 'false';

  if (isPopularButtonChecked.length !== 0) {
    valueObjForLocalStorage.isPopular = 'true';

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
    valueObjForLocalStorage.isPopular = 'false';
    filterCardsByAmount(cardsArr);
  }
};

const filterCardsByColors = (cardsArr: Array<Element>) => {
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
          const colorProp = (card.querySelector('.color-prop') as HTMLDivElement)
            .innerText;
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

const filterCardsByCameras = (cardsArr: Array<Element>) => {
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

const filterCardsByManufacturer = () => {
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


//Select filters
const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null,
) => {
  const manufacturer = (clickedManufacturerFilter as HTMLDivElement).getAttribute(
    'data-manufacturer',
  );

  if (
    (clickedManufacturerFilter as HTMLDivElement).classList.contains('active')
  ) {
    (clickedManufacturerFilter as HTMLDivElement).classList.remove('active');
    if (manufacturer)
      (valueObjForLocalStorage[`${manufacturer}` as OnlyKeys]) = 'false';
  } else {
    (clickedManufacturerFilter as HTMLDivElement).classList.add('active');
    if (manufacturer)
      valueObjForLocalStorage[`${manufacturer}` as OnlyKeys] = 'true';
  }
  filterCardsByManufacturer();
};

const selectClickedCameraFilter = (clickedCameraFilter: EventTarget | null) => {
  const camera = (clickedCameraFilter as HTMLDivElement).getAttribute(
    'data-camera',
  );
  if ((clickedCameraFilter as HTMLDivElement).classList.contains('active')) {
    (clickedCameraFilter as HTMLDivElement).classList.remove('active');
    if (camera)
      valueObjForLocalStorage[`${camera}` as OnlyKeys] = 'false';
  } else {
    (clickedCameraFilter as HTMLDivElement).classList.add('active');
    if (camera)
      valueObjForLocalStorage[`${camera}` as OnlyKeys] = 'true';
  }
  filterCardsByManufacturer();
};

const selectClickedColorFilter = (clickedColorFilter: EventTarget | null) => {
  const color = (clickedColorFilter as HTMLDivElement).getAttribute('data-color');
  if ((clickedColorFilter as HTMLDivElement).classList.contains('active')) {
    (clickedColorFilter as HTMLDivElement).classList.remove('active');
    if (color)
      valueObjForLocalStorage[`${color}` as OnlyKeys] = 'false';
  } else {
    (clickedColorFilter as HTMLDivElement).classList.add('active');
    if (color)
      valueObjForLocalStorage[`${color}` as OnlyKeys] = 'true';
  }
  filterCardsByManufacturer();
};

// Add Filters Handlers
const addManufacturerClickHandler = () => {
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

const addCamerasClickHandler = () => {
  document.querySelector('.camera-amount')?.addEventListener('click', (e) => {
    if ((e.target as HTMLDivElement).classList.contains('button_camera')) {
      const clickedCameraFilter = e.target;
      selectClickedCameraFilter(clickedCameraFilter);
    }
  });
};

const addColorsClickHandler = () => {
  document.querySelector('.colors')?.addEventListener('click', (e) => {
    if ((e.target as HTMLDivElement).classList.contains('button_color')) {
      const clickedColorFilter = e.target;
      selectClickedColorFilter(clickedColorFilter);
    }
  });
};

const addIsPopularClickHandler = () => {
  document.querySelector('#popular-input')?.addEventListener('click', () => {
    filterCardsByManufacturer();
  });
};

//Add Sort Handler

const addSortHandler = () => {
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

//Toggle Search Icons

const hideSearchIcon = () => {
  const searchImg = document.querySelector(
    '.store-content__search-window .search-img',
  );
  const crossImg = document.querySelector(
    '.store-content__search-window .clear-img',
  );
  searchImg?.classList.add('hidden');
  crossImg?.classList.remove('hidden');
};

const displaySearchIcon = () => {
  const searchImg = document.querySelector(
    '.store-content__search-window .search-img',
  );
  const crossImg = document.querySelector(
    '.store-content__search-window .clear-img',
  );
  searchImg?.classList.remove('hidden');
  crossImg?.classList.add('hidden');
};

//Add Search Handler

const addSearchHandler = () => {
  const searchWindow = document.getElementById(
    'search-input',
  ) as HTMLInputElement;

  searchWindow?.addEventListener('input', () => {
    const cards = document.querySelectorAll('.store-content__item');
    const filtered = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    const val = searchWindow?.value.toLowerCase().trim();
    if (val != '') {
      hideSearchIcon();
      filtered.forEach((card) => {
        const title = card.getAttribute('data-title')?.toLowerCase();
        if (title?.search(val) == -1) {
          card.classList.add('hide');
        } else {
          card.classList.remove('hide');
        }
      });
      const twiceFiltered = filtered.filter(
        (card) => !card.classList.contains('hide'),
      );
      if (twiceFiltered.length === 0) {
        generateAbsentModal();
      }
    } else {
      filtered.forEach((card) => {
        card.classList.remove('hide');
      });
      displaySearchIcon();
    }
  });
};

const addClearIconHandler = () => {
  const searchWindow = document.getElementById(
    'search-input',
  ) as HTMLInputElement;
  const crossImg = document.querySelector(
    '.store-content__search-window .clear-img',
  );
  crossImg?.addEventListener('click', () => {
    searchWindow.value = '';
    const cards = document.querySelectorAll('.store-content__item');
    const filtered = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    filtered.forEach((card) => {
      card.classList.remove('hide');
    });
    displaySearchIcon();
  });
};

//Reset Handler
const resetValues = () => {
  valueObjForLocalStorage.minAmountVal = valueObjDefault.minAmountVal;
  valueObjForLocalStorage.maxAmountVal = valueObjDefault.maxAmountVal;
  valueObjForLocalStorage.minYearVal = valueObjDefault.minYearVal;
  valueObjForLocalStorage.samsung = valueObjDefault.samsung;
  valueObjForLocalStorage.apple = valueObjDefault.apple;
  valueObjForLocalStorage.realme = valueObjDefault.realme;
  valueObjForLocalStorage.xiaomi = valueObjDefault.xiaomi;
  valueObjForLocalStorage.fiveCameras = valueObjDefault.fiveCameras;
  valueObjForLocalStorage.fourCameras = valueObjDefault.fourCameras;
  valueObjForLocalStorage.threeCameras = valueObjDefault.threeCameras;
  valueObjForLocalStorage.twoCameras = valueObjDefault.twoCameras;
  valueObjForLocalStorage.oneCamera = valueObjDefault.oneCamera;
  valueObjForLocalStorage.white = valueObjDefault.white;
  valueObjForLocalStorage.yellow = valueObjDefault.yellow;
  valueObjForLocalStorage.black = valueObjDefault.black;
  valueObjForLocalStorage.red = valueObjDefault.red;
  valueObjForLocalStorage.blue = valueObjDefault.blue;
  valueObjForLocalStorage.black = valueObjDefault.black;
  valueObjForLocalStorage.isPopular = valueObjDefault.isPopular;
};

const addResetHandler = () => {
  document
    .querySelector('.store-content__reset .filters')
    ?.addEventListener('click', () => {
      resetValues();
      window.location.reload();
    });
};

const addResetSettingsHandler = () => {
  document
    .querySelector('.store-content__reset .settings')
    ?.addEventListener('click', () => {
      valueObjForLocalStorage.activeCards = valueObjDefault.activeCards;
      valueObjForLocalStorage.sortingScheme = valueObjDefault.sortingScheme;
      resetValues();
      window.location.reload();
    });
};


//Add Cards Handlers
const getCardsWrapper = () => {
  const cardsContainer = document.querySelector('.store-content__wrapper');
  (cardsContainer as HTMLDivElement).innerHTML = '';
  return cardsContainer;
};

const generateCards = (cardsData: Array<CardData>) => {
  const cards: Card[] = [];
  cardsData.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
};

const renderCardsToDom = () => {
  const cardsWrapper = getCardsWrapper();
  generateCards(data).forEach((card) => {
    cardsWrapper?.append(card.generateCard());
  });
};

const drawCardsCount = (cardsCount: number) => {
  const cardsCountInBasket = document.querySelector('.basket__quantity');
  if (cardsCount <= 20) {
    (cardsCountInBasket as HTMLDivElement).innerText = cardsCount.toString();
  } else {
    generateBasketModal();
  }
};

const countClickedCards = () => {
  const cardsCount = document.querySelectorAll('.store-content__item.active');
  const activeCardsArray: Array<string> = [];
  cardsCount.forEach((element) => {
    const id = element.getAttribute('data-id');
    activeCardsArray.push(id!);
  });
  valueObjForLocalStorage.activeCards = activeCardsArray;
  drawCardsCount(cardsCount.length);
};

const selectClickedCard = (clickedCard: EventTarget | null) => {
  (clickedCard as HTMLDivElement).classList.toggle('active');
  countClickedCards();
};


const addCardClickHandler = () => {
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

//Range inputs
const getAmountRangeValues = () => {
  const rangeInput = document.querySelectorAll('.amount-range-input input');
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

  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e: Event) => {
      const minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === 'amount-range-min') {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove('hidden');
        maxValueBox?.classList.remove('hidden');
        amountInput[0].innerHTML = minValue.toString();
        amountInput[1].innerHTML = maxValue.toString();
        valueObjForLocalStorage.minAmountVal = minValue.toString();
        valueObjForLocalStorage.maxAmountVal = maxValue.toString();

        (progress as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 1) * 100) / 19,
        )}%`;
        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 1) * 100) / 19,
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();
        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc((maxValue * 100) / 20)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          (maxValue * 100) / 20,
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        filterCardsByManufacturer();
      }
    });
    input.addEventListener('mouseup', () => {
      minValueBox?.classList.add('hidden');
      maxValueBox?.classList.add('hidden');
    });
  });
};

const getYearRangeValues = () => {
  const rangeInput = document.querySelectorAll('.year-range-input input');
  const yearInput = document.querySelectorAll('.store-content__year-numbers');
  const progress = document.querySelector('.year-slider .year-progress');
  const minValueBox = document.querySelector('.year-slider .year-value_min');
  const maxValueBox = document.querySelector('.year-slider .year-value_max');
  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e: Event) => {
      const minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === 'year-range-min') {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove('hidden');
        maxValueBox?.classList.remove('hidden');
        yearInput[0].innerHTML = minValue.toString();
        yearInput[1].innerHTML = maxValue.toString();
        valueObjForLocalStorage.minYearVal = minValue.toString();
        valueObjForLocalStorage.maxYearVal = maxValue.toString();
        valueObjFromLocalStorage.minYearVal = minValue.toString();
        valueObjFromLocalStorage.maxYearVal = maxValue.toString();

        //   console.log(valueObjForLocalStorage.minYearVal);
        //   console.log(valueObjForLocalStorage.maxYearVal);
      
        //  console.log(valueObjFromLocalStorage.minYearVal);
        //   console.log(valueObjFromLocalStorage.maxYearVal);

        (progress as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / 22,
        )}%`;
        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / 22,
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();

        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc(((maxValue - 2000) * 100) / 22)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((maxValue - 2000) * 100) / 22,
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        filterCardsByManufacturer();
      }
    });
    input.addEventListener('mouseup', () => {
      minValueBox?.classList.add('hidden');
      maxValueBox?.classList.add('hidden');
    });
  });
};

//Add Local Storage
const setLocalStorage = () => {
  localStorage.setItem('minAmountVal', valueObjForLocalStorage.minAmountVal);
  localStorage.setItem('maxAmountVal', valueObjForLocalStorage.maxAmountVal);
  localStorage.setItem('minYearVal', valueObjForLocalStorage.minYearVal);
  localStorage.setItem('sortingScheme', valueObjForLocalStorage.sortingScheme);
  localStorage.setItem('samsung', valueObjForLocalStorage.samsung);
  localStorage.setItem('apple', valueObjForLocalStorage.apple);
  localStorage.setItem('realme', valueObjForLocalStorage.realme);
  localStorage.setItem('xiaomi', valueObjForLocalStorage.xiaomi);
  localStorage.setItem('fiveCameras', valueObjForLocalStorage.fiveCameras);
  localStorage.setItem('fourCameras', valueObjForLocalStorage.fourCameras);
  localStorage.setItem('threeCameras', valueObjForLocalStorage.threeCameras);
  localStorage.setItem('twoCameras', valueObjForLocalStorage.twoCameras);
  localStorage.setItem('oneCamera', valueObjForLocalStorage.oneCamera);
  localStorage.setItem('white', valueObjForLocalStorage.white);
  localStorage.setItem('yellow', valueObjForLocalStorage.yellow);
  localStorage.setItem('black', valueObjForLocalStorage.black);
  localStorage.setItem('red', valueObjForLocalStorage.red);
  localStorage.setItem('blue', valueObjForLocalStorage.blue);
  localStorage.setItem('isPopular', valueObjForLocalStorage.isPopular);
  localStorage.setItem('maxYearVal', valueObjForLocalStorage.maxYearVal);
  localStorage.setItem(
    'activeCards',
    JSON.stringify(valueObjForLocalStorage.activeCards),
  );
};

const addActiveClass = () => {
  console.log(valueObjForLocalStorage.minYearVal);
  console.log(valueObjForLocalStorage.maxYearVal);

  console.log(valueObjFromLocalStorage.minYearVal);
  console.log(valueObjFromLocalStorage.maxYearVal);
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
  const thumbYearMin = document.querySelector(
    '#year-min',
  );
  console.log(thumbYearMin);

  yearInput[0].innerHTML = valueObjFromLocalStorage.minYearVal.toString();
  yearInput[1].innerHTML = valueObjFromLocalStorage.maxYearVal.toString();

  (progressYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.minYearVal - 2000) * 100) / 22,
  )}%`;

  // (thumbYearMin as HTMLDivElement).style.left = `${Math.trunc(
  //   ((+valueObjFromLocalStorage.minYearVal - 2000) * 100) / 22,
  // )}%`;

  (minValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.minYearVal - 2000) * 100) / 22,
  )}%`;

  (minValueBoxYear as HTMLDivElement).innerHTML = valueObjFromLocalStorage.minYearVal.toString();

  (progressYear as HTMLDivElement).style.right = `${
    100 - Math.trunc(((+valueObjFromLocalStorage.maxYearVal - 2000) * 100) / 22)
  }%`;

 

  (maxValueBoxYear as HTMLDivElement).style.left = `${Math.trunc(
    ((+valueObjFromLocalStorage.maxYearVal - 2000) * 100) / 22,
  )}%`;
  (maxValueBoxYear as HTMLDivElement).innerHTML = valueObjFromLocalStorage.maxYearVal.toString();
  valueObjForLocalStorage.minYearVal = valueObjFromLocalStorage.minYearVal;
  // valueObjForLocalStorage.maxYearVal = valueObjFromLocalStorage.maxYearVal;

  // console.log(valueObjFromLocalStorage.minYearVal);
  // console.log(valueObjFromLocalStorage.maxYearVal);




  if (valueObjFromLocalStorage.isPopular === 'true') {
    (popularInput as HTMLInputElement).checked = true;
  }

  amountInput[0].innerHTML = valueObjFromLocalStorage.minAmountVal.toString();
  amountInput[1].innerHTML = valueObjFromLocalStorage.maxAmountVal.toString();

  (progress as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.minAmountVal * 100) / 20,
  )}%`;

  (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.minAmountVal * 100) / 20,
  )}%`;
  (minValueBox as HTMLDivElement).innerHTML = valueObjFromLocalStorage.minAmountVal.toString();
  (progress as HTMLDivElement).style.right = `${
    100 - Math.trunc((+valueObjFromLocalStorage.maxAmountVal * 100) / 20)
  }%`;

  (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
    (+valueObjFromLocalStorage.maxAmountVal * 100) / 20,
  )}%`;
  (maxValueBox as HTMLDivElement).innerHTML = valueObjFromLocalStorage.maxAmountVal.toString();
  valueObjForLocalStorage.minAmountVal = valueObjFromLocalStorage.minAmountVal;
  valueObjForLocalStorage.maxAmountVal = valueObjFromLocalStorage.maxAmountVal;
  


  

  for (let i = 0; i < manufacturers.length; i++) {
    if (
      manufacturers[i].classList.contains('apple') &&
      valueObjFromLocalStorage.apple === 'true'
    ) {
      manufacturers[i].classList.add('active');
    }
    if (
      manufacturers[i].classList.contains('samsung') &&
      valueObjFromLocalStorage.samsung === 'true'
    ) {
      manufacturers[i].classList.add('active');
    }
    if (
      manufacturers[i].classList.contains('xiaomi') &&
      valueObjFromLocalStorage.xiaomi === 'true'
    ) {
      manufacturers[i].classList.add('active');
    }
    if (
      manufacturers[i].classList.contains('realme') &&
      valueObjFromLocalStorage.realme === 'true'
    ) {
      manufacturers[i].classList.add('active');
    }
  }

  valueObjForLocalStorage.apple = valueObjFromLocalStorage.apple;
  valueObjForLocalStorage.samsung = valueObjFromLocalStorage.samsung;
  valueObjForLocalStorage.xiaomi = valueObjFromLocalStorage.xiaomi;
  valueObjForLocalStorage.realme = valueObjFromLocalStorage.realme;

  for (let i = 0; i < cameras.length; i++) {
    if (
      cameras[i].classList.contains('five-cameras') &&
      valueObjFromLocalStorage.fiveCameras === 'true'
    ) {
      cameras[i].classList.add('active');
    }
    if (
      cameras[i].classList.contains('four-cameras') &&
      valueObjFromLocalStorage.fourCameras === 'true'
    ) {
      cameras[i].classList.add('active');
    }
    if (
      cameras[i].classList.contains('three-cameras') &&
      valueObjFromLocalStorage.threeCameras === 'true'
    ) {
      cameras[i].classList.add('active');
    }
    if (
      cameras[i].classList.contains('two-cameras') &&
      valueObjFromLocalStorage.twoCameras === 'true'
    ) {
      cameras[i].classList.add('active');
    }
    if (
      cameras[i].classList.contains('one-camera') &&
      valueObjFromLocalStorage.oneCamera === 'true'
    ) {
      cameras[i].classList.add('active');
    }
  }

  valueObjForLocalStorage.oneCamera = valueObjFromLocalStorage.oneCamera;
  valueObjForLocalStorage.twoCameras = valueObjFromLocalStorage.twoCameras;
  valueObjForLocalStorage.threeCameras = valueObjFromLocalStorage.threeCameras;
  valueObjForLocalStorage.fourCameras = valueObjFromLocalStorage.fourCameras;
  valueObjForLocalStorage.fiveCameras = valueObjFromLocalStorage.fiveCameras;

  for (let i = 0; i < colors.length; i++) {
    if (
      colors[i].classList.contains('red') &&
      valueObjFromLocalStorage.red === 'true'
    ) {
      colors[i].classList.add('active');
    }
    if (
      colors[i].classList.contains('yellow') &&
      valueObjFromLocalStorage.yellow === 'true'
    ) {
      colors[i].classList.add('active');
    }
    if (
      colors[i].classList.contains('blue') &&
      valueObjFromLocalStorage.blue === 'true'
    ) {
      colors[i].classList.add('active');
    }
    if (
      colors[i].classList.contains('white') &&
      valueObjFromLocalStorage.white === 'true'
    ) {
      colors[i].classList.add('active');
    }
    if (
      colors[i].classList.contains('black') &&
      valueObjFromLocalStorage.black === 'true'
    ) {
      colors[i].classList.add('active');
    }
  }

  const sortOptions = document.getElementById('sort');
  (sortOptions as HTMLSelectElement).value =
    valueObjFromLocalStorage.sortingScheme;

  valueObjForLocalStorage.sortingScheme =
    valueObjFromLocalStorage.sortingScheme;

  valueObjForLocalStorage.black = valueObjFromLocalStorage.black;
  valueObjForLocalStorage.white = valueObjFromLocalStorage.white;
  valueObjForLocalStorage.blue = valueObjFromLocalStorage.blue;
  valueObjForLocalStorage.yellow = valueObjFromLocalStorage.yellow;
  valueObjForLocalStorage.red = valueObjFromLocalStorage.red;

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

  drawCardsCount(valueObjFromLocalStorage.activeCards.length);
  filterCardsByManufacturer();
};

const getLocalStorage = () => {
  if (localStorage.getItem('minAmountVal')) {
    valueObjFromLocalStorage.minAmountVal = localStorage.getItem(
      'minAmountVal',
    )!;
  }
  if (localStorage.getItem('maxAmountVal')) {
    valueObjFromLocalStorage.maxAmountVal = localStorage.getItem(
      'maxAmountVal',
    )!;
  }
  if (localStorage.getItem('minYearVal')) {
    valueObjFromLocalStorage.minYearVal = localStorage.getItem('minYearVal')!;
  }
  if (localStorage.getItem('sortingScheme')) {
    valueObjFromLocalStorage.sortingScheme = localStorage.getItem(
      'sortingScheme',
    )!;
  }
  if (localStorage.getItem('samsung')) {
    valueObjFromLocalStorage.samsung = localStorage.getItem('samsung')!;
  }
  if (localStorage.getItem('apple')) {
    valueObjFromLocalStorage.apple = localStorage.getItem('apple')!;
  }
  if (localStorage.getItem('realme')) {
    valueObjFromLocalStorage.realme = localStorage.getItem('realme')!;
  }
  if (localStorage.getItem('xiaomi')) {
    valueObjFromLocalStorage.xiaomi = localStorage.getItem('xiaomi')!;
  }
  if (localStorage.getItem('fiveCameras')) {
    valueObjFromLocalStorage.fiveCameras = localStorage.getItem('fiveCameras')!;
  }
  if (localStorage.getItem('fourCameras')) {
    valueObjFromLocalStorage.fourCameras = localStorage.getItem('fourCameras')!;
  }
  if (localStorage.getItem('threeCameras')) {
    valueObjFromLocalStorage.threeCameras = localStorage.getItem(
      'threeCameras',
    )!;
  }
  if (localStorage.getItem('twoCameras')) {
    valueObjFromLocalStorage.twoCameras = localStorage.getItem('twoCameras')!;
  }
  if (localStorage.getItem('oneCamera')) {
    valueObjFromLocalStorage.oneCamera = localStorage.getItem('oneCamera')!;
  }
  if (localStorage.getItem('white')) {
    valueObjFromLocalStorage.white = localStorage.getItem('white')!;
  }
  if (localStorage.getItem('yellow')) {
    valueObjFromLocalStorage.yellow = localStorage.getItem('yellow')!;
  }
  if (localStorage.getItem('black')) {
    valueObjFromLocalStorage.black = localStorage.getItem('black')!;
  }
  if (localStorage.getItem('red')) {
    valueObjFromLocalStorage.red = localStorage.getItem('red')!;
  }
  if (localStorage.getItem('blue')) {
    valueObjFromLocalStorage.blue = localStorage.getItem('blue')!;
  }
  if (localStorage.getItem('isPopular')) {
    valueObjFromLocalStorage.isPopular = localStorage.getItem('isPopular')!;
  }
  if (localStorage.getItem('activeCards')) {
    valueObjFromLocalStorage.activeCards = (JSON.parse(
      localStorage.getItem('activeCards')!, 
    ) as string[]);
  }
  addActiveClass();
};

//Get Local Storage Values
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

window.addEventListener('load', getLocalStorage);
