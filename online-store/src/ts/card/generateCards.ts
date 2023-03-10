import { VALUES_FOR_LOCAL_STORAGE } from '../../store/data';
import { generateBasketModal } from '../modalWindows/generateModalWindows';
import { CardData } from '../interfaces/Interface';
import { PHONES_DATA } from '../../phonesData';
import { Card } from './сard';

export const getCardsWrapper = () => {
  const cardsContainer = document.querySelector('.store-content__wrapper');
  (cardsContainer as HTMLDivElement).innerHTML = '';
  return cardsContainer;
};

export const generateCards = (cardsData: Array<CardData>) => {
  const cards: Card[] = [];
  cardsData.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
};

export const renderCardsToDom = () => {
  const cardsWrapper = getCardsWrapper();
  generateCards(PHONES_DATA).forEach((card) => {
    cardsWrapper?.append(card.generateCard());
  });
};

export const drawCardsCount = (cardsCount: number) => {
  const cardsCountInBasket = document.querySelector('.basket__quantity');
  if (cardsCount <= 20) {
    (cardsCountInBasket as HTMLDivElement).innerText = cardsCount.toString();
  } else {
    generateBasketModal();
  }
};

export const countClickedCards = () => {
  const cardsCount = document.querySelectorAll('.store-content__item.active');
  const activeCardsArray: Array<string> = [];
  cardsCount.forEach((element) => {
    const id = element.getAttribute('data-id') as string;
    activeCardsArray.push(id);
  });
  VALUES_FOR_LOCAL_STORAGE.activeCards = activeCardsArray;
  drawCardsCount(cardsCount.length);
};

export const selectClickedCard = (clickedCard: EventTarget | null) => {
  (clickedCard as HTMLDivElement).classList.toggle('active');
  countClickedCards();
};
