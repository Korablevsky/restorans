"use strict";

class Restorans {
    constructor(src, cardTitle, cardText, parent) {
        this.src = src;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.parent = parent;
    }
    render() {
        document.querySelector(this.parent).insertAdjacentHTML(
            "beforeend",
            `
            <div class="restorans__card">
                <a href="" class="card__image">
                    <img
                        src="${this.src}"
                        alt="MacDonalds"
                    />
                </a>
                <a href="" class="card__title">${this.cardTitle}</a>
                <h1 class="card__text">${this.cardText}</h1>
                <h2 class="card__time">25 - 35 мин</h2>
            </div>
            `
        );
    }
}

const arrCardTitle = [
    "",
    "DimSum & Co — ЦДМ",
    "ДвижОК — Манежная",
    "НЯ — NHA",
    "Точка Дзы — Цветной",
    "Cinnabon",
    "PIZZELOVE",
    "Zю кафе — Тверская",
    "Bar BQ Cafe — Манежная",
];
const arrCardText = [
    "",
    "₽ • Японская • Китайская • Азиатская",
    "₽ • Американская • Европейская",
    "₽₽ • Вьетнамская",
    "₽₽ • Вьетнамская",
    "₽ • Выпечка • Десерты • Капкейки",
    "₽₽ • Пицца",
    "₽₽ • Японская",
    "₽₽₽ • Европейская",
];

document.querySelector(".btn").addEventListener("click", function () {
    for (let i = 1; i < 9; i++) {
        new Restorans(
            `image/restoraunts/rest${i}.jpg`,
            arrCardTitle[i],
            arrCardText[i],
            ".restorans__cards"
        ).render();
    }
});
