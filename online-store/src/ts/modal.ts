import { ModalDataType, ModalData } from './Interface';

export class Modal implements ModalData {
  classes: string;

  modal: ModalDataType;

  modalContent: ModalDataType;

  modalCloseBtn: ModalDataType;

  overlay: ModalDataType;

  constructor(classes: string) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content: Node | string) {
    //Overlay
    this.overlay = this.createDomNode(
      this.overlay,
      'div',
      'overlay',
      'overlay_modal',
    );

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //Modal content
    this.modalContent = this.createDomNode(
      this.modalContent,
      'div',
      'modal__content',
    );

    //Close Button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      'span',
      'modal__close-icon',
    );

    this.setContent(content);

    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    //Open Modal
    this.openModal();
  }

  createDomNode(
    node: Element | string,
    element: string,
    ...classes: Array<string>
  ) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content: Node | string) {
    if (typeof content === 'string') {
      (this.modalContent as HTMLDivElement).innerHTML = content;
    } else {
      (this.modalContent as HTMLDivElement).innerHTML = '';
      (this.modalContent as HTMLDivElement).appendChild(content);
    }
  }

  appendModalElements() {
    (this.modal as HTMLDivElement).append(this.modalCloseBtn as HTMLDivElement);
    (this.modal as HTMLDivElement).append(this.modalContent as HTMLDivElement);
    (this.overlay as HTMLDivElement).append(this.modal as HTMLDivElement);
  }

  bindEvents() {
    (this.modalCloseBtn as HTMLDivElement).addEventListener('click', (e) =>
      this.closeModal(e),
    );
    (this.overlay as HTMLDivElement).addEventListener('click', (e) =>
      this.closeModal(e),
    );
  }

  openModal() {
    document.body.append(this.overlay as HTMLDivElement);
  }

  closeModal(e: Event) {
    const classes = (e.target! as HTMLDivElement).classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      document.querySelector('.overlay')?.remove();
    }
  }
}
