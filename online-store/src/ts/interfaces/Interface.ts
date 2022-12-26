export interface CardData {
  id: string;
  title: string;
  urlToImg: string;
  amount: number;
  year: number;
  manufacturer: string;
  color: string;
  cameras: number;
  isPopular: string;
}
export interface ModalData {
  classes: string;
  modal: Element | null | string;
  modalContent: Element | null | string;
  modalCloseBtn: Element | null | string;
  overlay: Element | null | string;
}
export interface ErrorData {
  classes: string;
  urlToImg: string;
  text: string;
}

export type FiltersData = {
  manufacturer: Array<string>;
  cameras: Array<string>;
  colors: Array<string>;
  isPopular: string;
};

export type RangesData = {
  amount: Array<string>;
  year: Array<string>;
};

export type StorageData = {
  filterSettings: FiltersData;
  rangeSettings: RangesData;
  sortingScheme: string;
  activeCards: string[];
};

export type ModalDataType = string | Element;
