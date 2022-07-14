import { ErrorData } from "./Interface";
import { Modal } from "./modal";

export class ErrorModal extends Modal implements ErrorData {
  constructor(
    classes: string,
    { urlToImg, text }: { urlToImg: string; text: string }
  ) {
    super(classes);
    this.urlToImg = urlToImg;
    this.text = text;
  }
  urlToImg: string;
  text: string;

  generateError() {
    let template = "";
    let error = document.createElement("div");
    error.className = "error";

    this.text && (template += `<h2 class="error__title">${this.text}</h2>`);

    if (this.urlToImg) {
      template += `<div class="error__img-wrapper">`;
      template += `<img src=${this.urlToImg} alt="error" class="error__img"/>`;
      template += `</div>`;
    }

    error.innerHTML = template;
    return error;
  }

  renderErrorModal() {
    let content = this.generateError();
    super.buildModal(content);
  }
}
