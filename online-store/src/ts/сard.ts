import { CardData } from "./Interface";

export class Card implements CardData {
  constructor({
    id,
    title,
    urlToImg,
    amount,
    year,
    manufacturer,
    color,
    cameras,
    isPopular,
  }: {
    id: string;
    title: string;
    urlToImg: string;
    amount: number;
    year: number;
    manufacturer: string;
    color: string;
    cameras: number;
    isPopular: string | boolean;
  }) {
    this.id = id;
    this.title = title;
    this.urlToImg = urlToImg;
    this.amount = amount;
    this.year = year;
    this.manufacturer = manufacturer;
    this.color = color;
    this.cameras = cameras;
    this.isPopular = isPopular;
  }

  id: string;
  title: string;
  urlToImg: string;
  amount: number;
  year: number;
  manufacturer: string;
  color: string;
  cameras: number;
  isPopular: string | boolean;

  //Card generator
  generateCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "store-content__item";
    card.setAttribute("data-id", this.id);

    this.title &&
      (template += `<h3 class="store-content__title">${this.title}</h3>`);

    if (this.urlToImg) {
      template += `<div class="store-content__img-wrapper">`;
      template += `<img src=${this.urlToImg} alt="${this.title}" class="store-content__img"/>`;
      template += `</div>`;
    }

    if (
      this.amount ||
      this.year ||
      this.manufacturer ||
      this.color ||
      this.cameras ||
      this.isPopular
    ) {
      template += `<ul class="store-content__props">`;
      template += `<li>Количество: <span class="amount-prop">${this.amount}</span></li>`;
      template += `<li>Год выхода: <span class="year-prop">${this.year}</span></li>`;
      template += `<li>Производитель: <span class="manufacturer-prop">${this.manufacturer}</span></li>`;
      template += `<li>Цвет: <span class="color-prop">${this.color}</span></li>`;
      template += `<li>Количество камер: <span class="camera-prop">${this.cameras}</span></li>`;
      template += `<li>Популярный: <span class="popular-prop">${this.isPopular}</span></li>`;
      template += `</ul>`;
      template += `<div class="ribbon" title="Добавлена в избранное"></div>`
    }

    card.innerHTML = template;
    return card;
  }
}
