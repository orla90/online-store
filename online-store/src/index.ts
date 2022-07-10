import { Card } from './ts/сard'; 
import { data } from './ts/Data';
import { CardData } from './ts/Interface';

window.onload = function () {
  console.log("Hello");

  // Render Cards
  if(data) {
    renderCardsToDom();
  }

  //Filters
  addManufacturerClickHandler();
  addCamerasClickHandler();
};

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
  document
    .querySelector(".camera-amount")
    ?.addEventListener("click", (e) => {
      if (
        (e.target as HTMLDivElement).classList.contains("button_camera")
      ) {
        let clickedCameraFilter = e.target;
        selectClickedCameraFilter(clickedCameraFilter);
      }
    });
}


const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null
) => {
  (clickedManufacturerFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
};

const selectClickedCameraFilter = (clickedCameraFilter: EventTarget | null) => {
  (clickedCameraFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
}


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
          (manufacturerButton as HTMLDivElement).innerText === manufacturerProp
        ) {
          card.classList.remove("store-content__item_hidden");
        }
      });
    }
  });

  const cardsFilteredByManufacturer = Array.from(cards).filter(card => !card.classList.contains("store-content__item_hidden"));
  console.log(cardsFilteredByManufacturer);
  filterCardsByCameras(cardsFilteredByManufacturer); 

  } else {
    console.log(cards);
    cards.forEach((card) => {
      card.classList.remove("store-content__item_hidden");
    });
    filterCardsByCameras(Array.from(cards)); 
  }
};

const filterCardsByCameras = (cardsArr: Array<Element>) => {
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
        if (
          (cameraButton as HTMLDivElement).innerText === cameraProp
        ) {
          card.classList.remove("store-content__item_hidden");
        }
      });
    }
  });
};

}

const renderCardsToDom = () => {
  let cardsWrapper = getCardsWrapper();
  generateCards(data).forEach(card => {
    cardsWrapper?.append(card.generateCard())
  })
};

const getCardsWrapper = () => {
  const cardsContainer = document.querySelector(".store-content__wrapper");
  (cardsContainer as HTMLDivElement).innerHTML = "";
  return cardsContainer;
}

const generateCards = (data: Array<CardData>) => {
  let cards: Card[] = [];
  data.forEach(card => {
    cards.push(new Card(card));
  });
  return cards;
}