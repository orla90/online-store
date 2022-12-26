import { VALUES_FOR_LOCAL_STORAGE } from '../../store/data';
import { generateAbsentModal } from '../modalWindows/generateModalWindows';

const insertAfter = (elem: Element, refElem: Element) => {
  return refElem.parentNode?.insertBefore(elem, refElem.nextSibling);
};

export const sortNumbersAsc = (parent: Element, attr: string) => {
  for (let i = 0; i < parent.children.length; i++) {
    for (let j = i; j < parent.children.length; j++) {
      if (
        +(parent.children[i].getAttribute(attr) as string) >
        +(parent.children[j].getAttribute(attr) as string)
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        +(parent.children[i].getAttribute(attr) as string) <
        +(parent.children[j].getAttribute(attr) as string)
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        (parent.children[i].getAttribute(attr) as string) >
        (parent.children[j].getAttribute(attr) as string)
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
        (parent.children[i].getAttribute(attr) as string) <
        (parent.children[j].getAttribute(attr) as string)
      ) {
        const replacedNode = parent.replaceChild(
          parent.children[j],
          parent.children[i]
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
      !card.classList.contains('store-content__item_hidden')
  );
  const overlay = document.querySelector('.overlay');

  if (filtered.length === 0 && !overlay) {
    generateAbsentModal();
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'sort-by-name-asc') {
    sortStringAsc(parent, 'data-title');
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'sort-by-name-desc') {
    sortStringDesc(parent, 'data-title');
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'ascending-amount') {
    sortNumbersAsc(parent, 'data-amount');
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'descending-amount') {
    sortNumbersDesc(parent, 'data-amount');
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'ascending-year') {
    sortNumbersAsc(parent, 'data-year');
  }

  if (VALUES_FOR_LOCAL_STORAGE.sortingScheme === 'descending-year') {
    sortNumbersDesc(parent, 'data-year');
  }
};
