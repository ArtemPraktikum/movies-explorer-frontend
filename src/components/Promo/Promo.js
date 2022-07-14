import React from "react";
import "./Promo.css";
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    // контейнер блока промо
    <section className="promo">
      {/* тестовый заголовок */}
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      {/* компонент с навигацией */}
      <NavTab/>
    </section>
  );
}

export default Promo;
