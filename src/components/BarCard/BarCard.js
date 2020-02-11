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
        <span className="bar__badge">terrasse</span>
      </div>
      <h3 className="bar__address">48 Boulevard de Ménilmontant, 75020 Paris</h3>
      <div className="bar__hours">
        <div className="hours">
          <span className="hours__label">Auj.</span>
          <span className="hours__value">16h-02h</span>
        </div>
        <div className="hours hours--happyHour">
          <span className="hours__label">Happy hour</span>
          <span className="hours__value">16h-20h</span>
        </div>
      </div>
      <div className="bar__prices">
        <h4 className="prices__label">Prix pinte (50cl)</h4>
        <div className="prices">
          <div className="price price--happyHour">
            <div className="price__value">5€</div>
            <div className="price__label">happy hour</div>
          </div>
          <div className="price">
            <div className="price__value">7€</div>
            <div className="price__label">normal</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BarCard;