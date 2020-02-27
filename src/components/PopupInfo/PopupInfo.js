import React, { useState } from 'react'
//components
import Picker from 'components/Picker/Picker'
//style 
import './PopupInfo.scss';
// icons
import { ReactComponent as Happyhour } from 'assets/icons/Happyhour.svg'
import { ReactComponent as Beer } from 'assets/icons/Beer.svg'
import { ReactComponent as Time } from 'assets/icons/Time.svg'
import { ReactComponent as Terrace } from 'assets/icons/Terrace.svg'

function PopupInfo() {
  return (
    <div id="Popup">
      <div className="popup__container">
        <div className="popup__container-head">
          <div>Reminder</div>
          <div className="icon-close">27/02/2024</div>
        </div>
        <div className="popup__container-body">
          <img src="https://media.nouvelobs.com/referentiel/1377x667/15384110.jpg" alt=""/>
          <div className="popup__container-info">
            <p>100m Woman Finals</p>
            <p>17h15</p>
            <p>Stade de France</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopupInfo;