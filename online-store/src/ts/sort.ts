import { valueObjForLocalStorage } from './data';
import { generateAbsentModal } from './generateModalWindows';

// Functions for sorting
const insertAfter = (elem: Element, refElem: Element) => {
  return refElem.parentNode?.insertBefore(elem, refElem.nextSibling);
};

export const sortNumbersAsc = (parent: Element, attr: string) => {
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

export const sortNumbersDesc = (parent: Element, attr: string) => {
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

export const sortStringAsc = (parent: Element, attr: string) => {
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

export const sortStringDesc = (parent: Element, attr: string) => {
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

export const sortCards = (cardsArr: Array<Element>) => {
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