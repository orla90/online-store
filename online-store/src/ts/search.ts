import { generateAbsentModal } from './generateModalWindows';

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

export const addSearchHandler = () => {
  const searchWindow = document.getElementById(
    'search-input',
  ) as HTMLInputElement;

  searchWindow?.addEventListener('change', (e) => {
    const cards = document.querySelectorAll('.store-content__item');
    const filtered = Array.from(cards).filter(
      (card) => !card.classList.contains('store-content__item_hidden'),
    );
    const val = ((e.target as HTMLInputElement).value).toLowerCase().trim();
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

export const addClearIconHandler = () => {
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
