import { Card } from './ts/Card'; 
import { data } from './ts/Data';
import { CardData } from './ts/Interface';

window.onload = function () {
  console.log("Hello");

  // Render Cards
  if(data) {
    renderCardsToDom();
  }

  //Manufacurer filter
  addManufacturerClickHandler();
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

const selectClickedManufacturerFilter = (
  clickedManufacturerFilter: EventTarget | null
) => {
  (clickedManufacturerFilter as HTMLDivElement).classList.toggle("active");
  filterCardsByManufacturer();
};

const filterCardsByManufacturer = () => {
  const cards = document.querySelectorAll(
    ".layout-5-column .store-content__item"
  );
  const manufacturerButtons = document.querySelectorAll(
    ".manufacturer-list .button_manufacturer"
  );

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
};

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