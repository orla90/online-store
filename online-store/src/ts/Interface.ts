export interface CardData {
  id: string;
  title: string;
  urlToImg: string;
  amount: number;
  year: number;
  manufacturer: string;
  color: string;
  cameras: number;
  isPopular: string | boolean;
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
