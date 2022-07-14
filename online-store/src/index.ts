import { Card } from "./ts/сard";
import { CardData } from "./ts/Interface";
import { data } from "./ts/phonesData";
import { Modal } from "./ts/modal";
import { ErrorModal } from "./ts/errorModal";

window.onload = function () {
  console.log("Hello");

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
};

const valueObj = {
  minAmountVal: 1,
  maxAmountVal: 20,
  minYearVal: 2000,
  maxYearVal: 2022,
  sortingScheme: "sort-by-name-desc",
};

// Add Filters Handlers
const addManufacturerClickHandler = () => {
  document
    .querySelector(".manufacturer-list")
    ?.addEventListener("click", (e) => {
      if (
        (e.target as HTMLDivElement).classList.contains("button_manufacturer")
      ) {
        let clickedManufacturerFilter = e.target;
        selectClickedManufacturerFilter(clickedManufacturerFilter);
      }
    });
};

const addCamerasClickHandler = () => {
  document.querySelector(".camera-amount")?.addEventListener("click", (e) => {
    if ((e.target as HTMLDivElement).classList.contains("button_camera")) {
      let clickedCameraFilter = e.target;
      selectClickedCameraFilter(clickedCameraFilter);
    }
  });
};

const addColorsClickHandler = () => {
  document.querySelector(".colors")?.addEventListener("click", (e) => {
    if ((e.target as HTMLDivElement).classList.contains("button_color")) {
      let clickedColorFilter = e.target;
      selectClickedColorFilter(clickedColorFilter);
    }
  });
};

const addIsPopularClickHandler = () => {
  document.querySelector("#popular-input")?.addEventListener("click", () => {
    filterCardsByManufacturer();
  });
};

//Add Sort Handler

const addSortHandler = () => {
  const sortOptions = document.getElementById("sort");
  sortOptions?.addEventListener(
    "change",
    function () {
      valueObj.sortingScheme = (this as HTMLSelectElement).value;
      filterCardsByManufacturer();
    },
    false
  );
};

//Add Search Handler

const addSearchHandler = () => {
  const searchWindow = document.getElementById(
    "search-input"
  ) as HTMLInputElement;

  searchWindow?.addEventListener("input", () => {
    const cards = document.querySelectorAll(".store-content__item");
    const filtered = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    const val = searchWindow?.value.toLowerCase().trim();
    if (val != "") {
      hideSearchIcon();
      filtered.forEach((card) => {
        let title = card.getAttribute("data-title")?.toLowerCase();
        if (title?.search(val) == -1) {
          card.classList.add("hide");
        } else {
          card.classList.remove("hide");
        }
      });
      const twiceFiltered = filtered.filter(
        (card) => !card.classList.contains("hide")
      );
      if (twiceFiltered.length === 0) {
        generateAbsentModal();
      }
    } else {
      filtered.forEach((card) => {
        card.classList.remove("hide");
      });
      displaySearchIcon();
    }
  });
};

const addClearIconHandler = () => {
  const searchWindow = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  const crossImg = document.querySelector(
    ".store-content__search-window .clear-img"
  );
  crossImg?.addEventListener("click", () => {
    searchWindow.value = "";
    const cards = document.querySelectorAll(".store-content__item");
    const filtered = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filtered.forEach((card) => {
      card.classList.remove("hide");
    });
    displaySearchIcon();
  });
};

//Toggle Search Icons

const hideSearchIcon = () => {
  const searchImg = document.querySelector(
    ".store-content__search-window .search-img"
  );
  const crossImg = document.querySelector(
    ".store-content__search-window .clear-img"
  );
  searchImg?.classList.add("hidden");
  crossImg?.classList.remove("hidden");
};

const displaySearchIcon = () => {
  const searchImg = document.querySelector(
    ".store-content__search-window .search-img"
  );
  const crossImg = document.querySelector(
    ".store-content__search-window .clear-img"
  );
  searchImg?.classList.remove("hidden");
  crossImg?.classList.add("hidden");
};

//Add Filters

const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null
) => {
  (clickedManufacturerFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
};

const selectClickedCameraFilter = (clickedCameraFilter: EventTarget | null) => {
  (clickedCameraFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
};

const selectClickedColorFilter = (clickedColorFilter: EventTarget | null) => {
  (clickedColorFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
};

const filterCardsByManufacturer = () => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );
  const manufacturerButtons = document.querySelectorAll(
    ".manufacturer-list .button_manufacturer"
  );
  const activeManufacturerButtons = document.querySelectorAll(
    ".manufacturer-list .button_manufacturer.active"
  );

  if (activeManufacturerButtons.length !== 0) {
    cards.forEach((card) => {
      card.classList.add("store-content__item_hidden");
    });

    manufacturerButtons.forEach((manufacturerButton) => {
      if (manufacturerButton.classList.contains("active")) {
        cards.forEach((card) => {
          let manufacturerProp = (card.querySelector(
            ".manufacturer-prop"
          ) as HTMLDivElement).innerText;
          if (
            (manufacturerButton as HTMLDivElement).innerText ===
            manufacturerProp
          ) {
            card.classList.remove("store-content__item_hidden");
          }
        });
      }
    });

    const cardsFilteredByManufacturer = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filterCardsByCameras(cardsFilteredByManufacturer);
  } else {
    cards.forEach((card) => {
      card.classList.remove("store-content__item_hidden");
    });
    filterCardsByCameras(Array.from(cards));
  }
};

const filterCardsByCameras = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );

  const camerasButtons = document.querySelectorAll(
    ".camera-amount .button_camera"
  );

  const activeCameraButtons = document.querySelectorAll(
    ".camera-amount .button_camera.active"
  );

  if (activeCameraButtons.length !== 0) {
    cardsArr.forEach((card) => {
      if (!card.classList.contains("store-content__item_hidden")) {
        card.classList.add("store-content__item_hidden");
      }
    });

    camerasButtons.forEach((cameraButton) => {
      if (cameraButton.classList.contains("active")) {
        cardsArr.forEach((card) => {
          let cameraProp = (card.querySelector(
            ".camera-prop"
          ) as HTMLDivElement).innerText;
          if ((cameraButton as HTMLDivElement).innerText === cameraProp) {
            card.classList.remove("store-content__item_hidden");
          }
        });
      }
    });

    const cardsFilteredByCameras = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filterCardsByColors(cardsFilteredByCameras);
  } else {
    filterCardsByColors(cardsArr);
  }
};

const filterCardsByColors = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );

  const colorsButtons = document.querySelectorAll(".colors .button_color");

  const activeColorsButtons = document.querySelectorAll(
    ".colors .button_color.active"
  );

  if (activeColorsButtons.length !== 0) {
    cardsArr.forEach((card) => {
      if (!card.classList.contains("store-content__item_hidden")) {
        card.classList.add("store-content__item_hidden");
      }
    });

    colorsButtons.forEach((colorsButton) => {
      if (colorsButton.classList.contains("active")) {
        cardsArr.forEach((card) => {
          let colorProp = (card.querySelector(".color-prop") as HTMLDivElement)
            .innerText;
          if ((colorsButton as HTMLDivElement).innerText === colorProp) {
            card.classList.remove("store-content__item_hidden");
          }
        });
      }
    });

    const cardsFilteredByColors = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filterCardsByIsPopular(cardsFilteredByColors);
  } else {
    filterCardsByIsPopular(cardsArr);
  }
};

const filterCardsByIsPopular = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );

  const isPopularButtonChecked = document.querySelectorAll(
    "#popular-input:checked"
  );

  if (isPopularButtonChecked.length !== 0) {
    cardsArr.forEach((card) => {
      if (!card.classList.contains("store-content__item_hidden")) {
        card.classList.add("store-content__item_hidden");
      }
    });

    cardsArr.forEach((card) => {
      let isPopularProp = (card.querySelector(
        ".popular-prop"
      ) as HTMLDivElement).innerText;
      if (isPopularProp === "да") {
        card.classList.remove("store-content__item_hidden");
      }
    });
    const cardsFilteredByIsPopular = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filterCardsByAmount(cardsFilteredByIsPopular);
  } else {
    filterCardsByAmount(cardsArr);
  }
};

const filterCardsByAmount = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );
  cardsArr.forEach((card) => {
    if (!card.classList.contains("store-content__item_hidden")) {
      card.classList.add("store-content__item_hidden");
    }
  });

  cardsArr.forEach((card) => {
    let amount = (card.querySelector(".amount-prop") as HTMLDivElement)
      .innerText;
    if (
      parseInt(amount) >= valueObj.minAmountVal &&
      parseInt(amount) <= valueObj.maxAmountVal
    ) {
      card.classList.remove("store-content__item_hidden");
    }
  });
  const cardsFilteredByAmount = Array.from(cards).filter(
    (card) => !card.classList.contains("store-content__item_hidden")
  );
  filterCardsByYear(cardsFilteredByAmount);
};

const filterCardsByYear = (cardsArr: Array<Element>) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );
  cardsArr.forEach((card) => {
    if (!card.classList.contains("store-content__item_hidden")) {
      card.classList.add("store-content__item_hidden");
    }
  });
  cardsArr.forEach((card) => {
    let year = (card.querySelector(".year-prop") as HTMLDivElement).innerText;
    if (
      parseInt(year) >= valueObj.minYearVal &&
      parseInt(year) <= valueObj.maxYearVal
    ) {
      card.classList.remove("store-content__item_hidden");
    }
  });
  const cardsFilteredByYear = Array.from(cards).filter(
    (card) => !card.classList.contains("store-content__item_hidden")
  );
  sortCards(cardsArr);
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
        let replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        let replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        let replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        let replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
        );
        insertAfter(replacedNode, parent.children[i]);
      }
    }
  }
};

const sortCards = (cardsArr: Array<Element>) => {
  const parent = document.querySelector(".store-content__wrapper") as Element;
  const filtered = cardsArr.filter(
    (card) =>
      !card.classList.contains("hide") &&
      !card.classList.contains("store-content__item_hidden")
  );
  const overlay = document.querySelector(".overlay");

  if (filtered.length === 0 && !overlay) {
    generateAbsentModal();
  }

  if (valueObj.sortingScheme === "sort-by-name-asc") {
    sortStringAsc(parent, "data-title");
  }

  if (valueObj.sortingScheme === "sort-by-name-desc") {
    sortStringDesc(parent, "data-title");
  }

  if (valueObj.sortingScheme === "ascending-amount") {
    sortNumbersAsc(parent, "data-amount");
  }

  if (valueObj.sortingScheme === "descending-amount") {
    sortNumbersDesc(parent, "data-amount");
  }

  if (valueObj.sortingScheme === "ascending-year") {
    sortNumbersAsc(parent, "data-year");
  }

  if (valueObj.sortingScheme === "descending-year") {
    sortNumbersDesc(parent, "data-year");
  }
};

//Add Cards Handlers

const renderCardsToDom = () => {
  let cardsWrapper = getCardsWrapper();
  generateCards(data).forEach((card) => {
    cardsWrapper?.append(card.generateCard());
  });
};

const getCardsWrapper = () => {
  const cardsContainer = document.querySelector(".store-content__wrapper");
  (cardsContainer as HTMLDivElement).innerHTML = "";
  return cardsContainer;
};

const generateCards = (data: Array<CardData>) => {
  let cards: Card[] = [];
  data.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
};

const addCardClickHandler = () => {
  document.querySelectorAll(".store-content__item").forEach((item) => {
    item?.addEventListener("click", (e) => {
      let clickedCards = document.querySelectorAll(
        ".store-content__item.active"
      );
      let clickedCard = e.currentTarget;
      if (
        clickedCards.length < 20 ||
        (clickedCard as HTMLDivElement).classList.contains("active")
      ) {
        selectClickedCard(clickedCard);
      } else {
        generateBasketModal();
      }
    });
  });
};

const selectClickedCard = (clickedCard: EventTarget | null) => {
  (clickedCard as HTMLDivElement).classList.toggle("active");
  countClickedCards();
};

const countClickedCards = () => {
  let cardsCount = document.querySelectorAll(".store-content__item.active")
    .length;
  drawCardsCount(cardsCount);
};

const drawCardsCount = (cardsCount: number) => {
  let cardsCountInBasket = document.querySelector(".basket__quantity");
  if (cardsCount <= 20) {
    (cardsCountInBasket as HTMLDivElement).innerText = cardsCount.toString();
  } else {
    generateBasketModal();
  }
};

//Range inputs
const getAmountRangeValues = () => {
  const rangeInput = document.querySelectorAll(".amount-range-input input");
  const amountInput = document.querySelectorAll(
    ".store-content__amount-numbers"
  );
  const progress = document.querySelector(".amount-slider .amount-progress");
  const minValueBox = document.querySelector(
    ".amount-slider .amount-value_min"
  );
  const maxValueBox = document.querySelector(
    ".amount-slider .amount-value_max"
  );
  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e: Event) => {
      let minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === "amount-range-min") {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove("hidden");
        maxValueBox?.classList.remove("hidden");
        amountInput[0].innerHTML = minValue.toString();
        amountInput[1].innerHTML = maxValue.toString();
        (progress as HTMLDivElement).style.left = `${Math.trunc(
          (minValue * 100) / 20
        )}%`;
        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          (minValue * 100) / 20
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();
        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc((maxValue * 100) / 20)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          (maxValue * 100) / 20
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        valueObj.minAmountVal = minValue;
        valueObj.maxAmountVal = maxValue;
        filterCardsByManufacturer();
      }
    });
    input.addEventListener("mouseup", (e: Event) => {
      minValueBox?.classList.add("hidden");
      maxValueBox?.classList.add("hidden");
    });
  });
};

const getYearRangeValues = () => {
  const rangeInput = document.querySelectorAll(".year-range-input input");
  const yearInput = document.querySelectorAll(".store-content__year-numbers");
  const progress = document.querySelector(".year-slider .year-progress");
  const minValueBox = document.querySelector(".year-slider .year-value_min");
  const maxValueBox = document.querySelector(".year-slider .year-value_max");
  const amountGap = 1;
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e: Event) => {
      let minValue = parseInt((rangeInput[0] as HTMLInputElement).value),
        maxValue = parseInt((rangeInput[1] as HTMLInputElement).value);

      if (maxValue - minValue < amountGap) {
        if ((<HTMLTextAreaElement>e.target).className === "year-range-min") {
          (rangeInput[0] as HTMLInputElement).value = (
            maxValue - amountGap
          ).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (
            minValue + amountGap
          ).toString();
        }
      } else {
        minValueBox?.classList.remove("hidden");
        maxValueBox?.classList.remove("hidden");
        yearInput[0].innerHTML = minValue.toString();
        yearInput[1].innerHTML = maxValue.toString();

        (progress as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / 22
        )}%`;
        (minValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((minValue - 2000) * 100) / 22
        )}%`;
        (minValueBox as HTMLDivElement).innerHTML = minValue.toString();

        (progress as HTMLDivElement).style.right = `${
          100 - Math.trunc(((maxValue - 2000) * 100) / 22)
        }%`;
        (maxValueBox as HTMLDivElement).style.left = `${Math.trunc(
          ((maxValue - 2000) * 100) / 22
        )}%`;
        (maxValueBox as HTMLDivElement).innerHTML = maxValue.toString();
        valueObj.minYearVal = minValue;
        valueObj.maxYearVal = maxValue;
        filterCardsByManufacturer();
      }
    });
    input.addEventListener("mouseup", (e: Event) => {
      minValueBox?.classList.add("hidden");
      maxValueBox?.classList.add("hidden");
    });
  });
};

//Generate Modal Windows

const generateBasketModal = () => {
  renderErrorModalWindow(
    "../src/assets/media/dog.jpeg",
    "Извините, все слоты заполнены"
  );
};

const generateAbsentModal = () => {
  renderErrorModalWindow(
    "../src/assets/media/dog404.jpeg",
    "Извините, совпадений не обнаружено"
  );
};

const renderErrorModalWindow = (urlToImg: string, text: string) => {
  let modal = new ErrorModal("modal", { urlToImg, text });
  modal.renderErrorModal();
};
