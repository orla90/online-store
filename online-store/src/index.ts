import { Card } from "./ts/сard";
import { data } from "./ts/Data";
import { CardData } from "./ts/Interface";

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

  //Cards handlers
  addCardClickHandler();

  //Range Filters
  getAmountRangeValues();
  getYearRangeValues();
};

const valueObj = {
  minAmountVal: 1,
  maxAmountVal: 20,
  minYearVal: 2000,
  maxYearVal: 2022,
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

const filterCardsByManufacturer = (minAmount?: number, maxAmount?: number) => {
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
    filterCardsByCameras(cardsFilteredByManufacturer, minAmount, maxAmount);
  } else {
    cards.forEach((card) => {
      card.classList.remove("store-content__item_hidden");
    });
    filterCardsByCameras(Array.from(cards), minAmount, maxAmount);
  }
};

const filterCardsByCameras = (
  cardsArr: Array<Element>,
  minAmount?: number,
  maxAmount?: number
) => {
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
    filterCardsByColors(cardsFilteredByCameras, minAmount, maxAmount);
  } else {
    filterCardsByColors(cardsArr, minAmount, maxAmount);
  }
};

const filterCardsByColors = (
  cardsArr: Array<Element>,
  minAmount?: number,
  maxAmount?: number
) => {
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
    filterCardsByIsPopular(cardsFilteredByColors, minAmount, maxAmount);
  } else {
    filterCardsByIsPopular(cardsArr, minAmount, maxAmount);
  }
};

const filterCardsByIsPopular = (
  cardsArr: Array<Element>,
  minAmount?: number,
  maxAmount?: number
) => {
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
    filterCardsByAmount(cardsFilteredByIsPopular, minAmount, maxAmount);
  } else {
    filterCardsByAmount(cardsArr, minAmount, maxAmount);
  }
};

const filterCardsByAmount = (
  cardsArr: Array<Element>,
  minAmount?: number,
  maxAmount?: number
) => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );
  if (minAmount || maxAmount) {
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
    const cardsFilteredByYear = Array.from(cards).filter(
      (card) => !card.classList.contains("store-content__item_hidden")
    );
    filterCardsByYear(cardsFilteredByYear);
  } else {
    filterCardsByYear(cardsArr);
  }
};

const filterCardsByYear = (cardsArr: Array<Element>) => {
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
      let clickedCard = e.currentTarget;
      selectClickedCard(clickedCard);
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
        filterCardsByManufacturer(minValue, maxValue);
      }
    });
    input.addEventListener("change", (e: Event) => {
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
    input.addEventListener("change", (e: Event) => {
      minValueBox?.classList.add("hidden");
      maxValueBox?.classList.add("hidden");
    });
  });
};
