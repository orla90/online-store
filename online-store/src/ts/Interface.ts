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

export type ObjData = {
  minAmountVal: string,
  maxAmountVal: string,
  minYearVal: string,
  maxYearVal: string,
  sortingScheme: string,
  samsung: string,
  apple: string,
  realme: string,
  xiaomi: string,
  fiveCameras: string,
  fourCameras: string,
  threeCameras: string,
  twoCameras: string,
  oneCamera: string,
  white: string,
  yellow: string,
  black: string,
  red: string,
  blue: string,
  isPopular: string,
  activeCards: string[],
};

type ObjStrings = Omit<ObjData, 'activeCards'>;

export type ObjArray = Pick<ObjData, 'activeCards'>;

export type OnlyKeys = keyof ObjStrings;

export type OnlyKey = keyof ObjArray;

export type ModalDataType = string | Element;