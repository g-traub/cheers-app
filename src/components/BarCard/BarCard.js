import React from 'react';
//style
import './BarCard.scss';
//formaters
import { formatCp, formatTime, formatPrice } from './formaters'

function BarCard(props) {
  const { bar } = props
  const metros = bar.metro.split(',')

  return (
    <section className="bar">
      <div className="bar__heading">
        <h2 className="bar__name">{bar.name}</h2>
        {/* @TODO : rating */}
        {/* <ol className="bar__rating">
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating"></li>
          <li className="rating rating--halfEmpty"></li>
          <li className="rating rating--empty"></li>
        </ol> */}
      </div>

      <h3 className="bar__address">
        <span>{bar.address}</span>
        <span>, {formatCp(bar.cp)}<sup>ème</sup></span>
      </h3>

      {metros.length > 1 && <ul className="bar__metros">
        {metros.map((metro, index) => <li key={index}><img className="metro" src={require(`assets/metro/${metro}.svg`)} alt={metro} /></li>)}
      </ul>}

      <hr />

      <div className="bar__infos">
        <div className="info__column">
          <div className="info info__hours">
            <img src={require("assets/icons/Time.svg")} alt="clock" />
            <p className="hours__label">opening hours</p>
            <p className="value">{formatTime(bar.start_hour)} - {formatTime(bar.end_hour)}</p>
          </div>
          <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="beer" />
            <p className="value">{formatPrice(bar.priceNormal)}€</p>
          </div>

          {Boolean(bar.terrace) && <div className="info info__terrace">
            <img src={require("assets/icons/Terrace.svg")} alt="terrace" />
            <img className="check" src={require("assets/icons/check.svg")} alt="check" />
          </div>}
        </div>
        
        {(bar.start_happy || bar.priceHappy) && <div className="info__column">
          {bar.start_happy && <div className="info info__hours">
            <img src={require("assets/icons/Happyhour.svg")} alt="happy hour" />
            <p className="hours__label">happy hour</p>
            <p className="value value--happy">{formatTime(bar.start_happy)} - {formatTime(bar.end_happy)}</p>
          </div>}
          {bar.priceHappy && <div className="info info__price">
            <img src={require("assets/icons/Beer.svg")} alt="beer" />
            <p className="value value--happy">{formatPrice(bar.priceHappy)}€</p>
          </div>}
        </div>}
      </div>
    </section>
  );
}

export default BarCard;