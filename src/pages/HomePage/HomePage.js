import React from 'react';
import { Link } from "react-router-dom";

import logo from 'assets/logo_text.svg';
import { ReactComponent as Happy } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Terrace } from 'assets/icons/Terrace.svg'
import { ReactComponent as Arrow } from 'assets/icons/Arrow-home.svg'
import './HomePage.scss';

function App() {
  return (
    <div className="Home">
        <div className="home__container">
        <div className="howis__container">
            <img src={logo} className="logo" alt="logo" />
            <div className="howis__desc t-center">
                <div className="home__title">How is Cheers going to help you ?</div>
                <p>Cheers will help you find the best place to share the Olympic Games’ emotions !</p>
                <p> Find the best <span>Bars & Terraces</span>,<span> Happy- Hours</span> and the cheapest <span>Beers</span> by reading the map !</p>
            </div>
            <div className="howis__boutons">
                <div className="filter__icon"><Terrace height="30" /></div>
                <div className="filter__icon happy-icon"><Happy height="30" /></div>
                <div className="filter__icon"><Beer height="30" /></div>
            </div>
        </div>
        <hr/>
        <div className="howtoroad__container">
            <div className="t-center home__title">How to read the map</div>
            <div className="howtoroad__legend">
                <div className="howtoroad__legend-price">
                    <p>Prices high to low</p>
                    <div className="point-icon level-4"></div>
                    <div className="point-icon level-3"></div>
                    <div className="point-icon level-2"></div>
                    <div className="point-icon level-1"></div>
                </div>
                <div className="howtoroad__legend-bar">
                    <p>Bars & terraces</p>
                    <div className="howtoroad__legend-bar-points">
                        <div className="point-icon point-less"></div>
                        <div className="point-icon point-neutral"></div>
                        <div className="point-icon point-more"></div>
                    </div>
                </div>
            </div>
            <div className="t-center home__title">Example</div>
            <div className="howtoroad__exemple">
                <div className="point-icon level-4"><Arrow height="30" /></div>
                <div className="point-icon level-3"><Arrow height="30" /></div>
                <div className="point-icon level-2"><Arrow height="30" /></div>
                <div className="point-icon level-1"><Arrow height="30" /></div>
            </div>
        </div>
        <hr/>
        <div className="btn-start">
            <Link to="/map">Start</Link>
        </div>
        </div>
    </div>
  );
}

export default App;