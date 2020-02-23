import React from 'react';

import './BarCard.scss';

function BarCard(props) {
  const metros = props.bar.metro.split(',')

  return (
    <section className="bar">
      <div className="bar__heading">
        <h2 className="bar__name">{props.bar.name}</h2>
        {/* @TODO : rating */}
        <ol className="bar__rating">
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating rating--halfEmpty"></li>
          <li className="rating rating--empty"></li>
        </ol>
      </div>

      <h3 className="bar__address">
        <span>{props.bar.address}</span>
        {/* @TODO: change cp to just arrondissement */}
        <span>, {props.bar.cp}</span>
        <span> {props.bar.city}</span>
      </h3>

      <ul className="bar__metros">
        {metros.map((metro, index) => <li key={index}><img className="metro" src={require(`assets/metro/${metro}.svg`)} alt={metro} /></li>)}
      </ul>

      <hr />

      <div className="bar__infos">
        <div className="info__column">
          <div className="info info__hours">
            <img src={require("assets/icons/Time.svg")} alt="clock" />
            <p className="hours__label">opening hours</p>
            {/* @TODO */}
            <p className="value">todo</p>
          </div>
          <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="beer" />
            <p className="value">{props.bar.price_normal}€</p>
          </div>

          {props.bar.terrasse && <div className="info info__terrace">
            <img src={require("assets/icons/Terrace.svg")} alt="terrace" />
            <img className="check" src={require("assets/icons/check.svg")} alt="check" />
          </div>}

        </div>
        <div className="info__column">
          <div className="info info__hours">
            <img src={require("assets/icons/Happyhour.svg")} alt="happy hour" />
            <p className="hours__label">happy hour</p>
            {/* @TODO */}
            <p className="value value--happy">todo</p>
          </div>
          {props.bar.price_happy && <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="beer" />
            <p className="value value--happy">{props.bar.price_happy}€</p>
          </div>}
        </div>
      </div>
    </section>
  );
}

export default BarCard;