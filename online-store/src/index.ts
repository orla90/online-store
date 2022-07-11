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
  document
    .querySelectorAll(".store-content__item").forEach(item => {
      item?.addEventListener("click", (e) => {
        let clickedCard = e.currentTarget;
        selectClickedCard(clickedCard);
    });
    }
  )
    
};

const selectClickedCard = (clickedCard: EventTarget | null) => {
  (clickedCard as HTMLDivElement).classList.toggle("active");
  countClickedCards();
};

const countClickedCards = () => {
  let cardsCount = document.querySelectorAll(".store-content__item.active").length;
  drawCardsCount(cardsCount);
}

const drawCardsCount = (cardsCount: number) => {
  let cardsCountInBasket = document.querySelector('.basket__quantity');
  if (cardsCount <= 20) {
    (cardsCountInBasket as HTMLDivElement).innerText = cardsCount.toString();
  }
}