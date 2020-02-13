import React, { useState } from 'react';

import './BarCard.scss';

function BarCard() {
  // const [count, setCount] = useState(0);

  return (
    <section className="bar">
      <div className="bar__heading">
        <h2 className="bar__name">Bar & beer</h2>
        <ol className="bar__rating">
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating rating--halfEmpty"></li>
          <li className="rating rating--empty"></li>
        </ol>
      </div>

      <h3 className="bar__address">48 Boulevard de Ménilmontant, 75020 Paris</h3>

      <div className="bar__metros">
        <img className="metro" src={require("assets/metro/4.svg")} alt="4" />
        <img className="metro" src={require("assets/metro/4.svg")} alt="4" />
      </div>

      <hr />
      <div className="bar__infos">
        <div className="info__column">
          <div className="info info__hours">
            <img src={require("assets/icons/Time.svg")} alt="" />
            <p className="hours__label">opening hours</p>
            <p className="value">16h-02h</p>
          </div>
          <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="" />
            <p className="value">7€</p>
          </div>
          <div className="info info__terrace">
            <img src={require("assets/icons/Terrace.svg")} alt="" />
            <img className="check" src={require("assets/icons/check.svg")} alt="" />
          </div>
        </div>
        <div className="info__column">
          <div className="info info__hours">
            <img src={require("assets/icons/Happyhour.svg")} alt="" />
            <p className="hours__label">happy hour</p>
            <p className="value value--happy">18h-20h</p>
          </div>
          <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="" />
            <p className="value value--happy">5€</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BarCard;