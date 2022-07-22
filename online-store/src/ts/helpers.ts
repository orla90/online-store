type Card = {
  id: number;
  year: string;
  amount: string;
  color: string;
  isPopular: string;
  camera: string;
  manufacturer: string;
};

type CardStringValues = Omit<Card, 'id'>;
type CardOnlyKeys = keyof CardStringValues;

export const filterCardsByYear = (
  cardsArr: Card[],
  minYearVal: string,
  maxYearVal: string,
) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (
      parseInt(card.year) >= +minYearVal &&
      parseInt(card.year) <= +maxYearVal
    ) {
      arr.push(card);
    }
  });
  return arr;
};

export const filterCardsByAmount = (
  cardsArr: Card[],
  minAmountVal: string,
  maxAmountVal: string,
) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (
      parseInt(card.amount) >= +minAmountVal &&
      parseInt(card.amount) <= +maxAmountVal
    ) {
      arr.push(card);
    }
  });
  return arr;
};

export const filterCardsByIsPopular = (cardsArr: Card[]) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (card.isPopular === 'true') arr.push(card);
  });
  return arr;
};

export const filterCardsByColors = (cardsArr: Card[], color: string) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (card.color === color) arr.push(card);
  });
  return arr;
};

export const filterCardsByCameras = (cardsArr: Card[], camera: string) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (card.camera === camera) arr.push(card);
  });
  return arr;
};

export const filterCardsByManufacturer = (
  cardsArr: Card[],
  manufacturer: string,
) => {
  const arr: Array<Card> = [];
  cardsArr.forEach((card) => {
    if (card.manufacturer === manufacturer) arr.push(card);
  });
  return arr;
};

export const sortNumbersAsc = (cardsArr: Card[], attr: CardOnlyKeys) => {
  cardsArr.sort((a, b) => {
    if (+a[`${attr}`]! > +b[`${attr}`]!) {
      return 1;
    } else if (+a[`${attr}`]! < +b[`${attr}`]!) {
      return -1;
    } else {
      return 0;
    }
  });
  return cardsArr;
};

export const sortNumbersDesc = (cardsArr: Card[], attr: CardOnlyKeys) => {
  cardsArr.sort((a, b) => {
    if (+a[`${attr}`]! > +b[`${attr}`]!) {
      return -1;
    } else if (+a[`${attr}`]! < +b[`${attr}`]!) {
      return 1;
    } else {
      return 0;
    }
  });
  return cardsArr;
};

export const sortStringAsc = (cardsArr: Card[], attr: CardOnlyKeys) => {
  cardsArr.sort((a, b) => {
    if (a[`${attr}`]! > b[`${attr}`]!) {
      return 1;
    } else if (a[`${attr}`]! < b[`${attr}`]!) {
      return -1;
    } else {
      return 0;
    }
  });
  return cardsArr;
};

export const sortStringDesc = (cardsArr: Card[], attr: CardOnlyKeys) => {
  cardsArr.sort((a, b) => {
    if (a[`${attr}`]! > b[`${attr}`]!) {
      return -1;
    } else if (a[`${attr}`]! < b[`${attr}`]!) {
      return 1;
    } else {
      return 0;
    }
  });
  return cardsArr;
};
