import React from 'react'
import './InfoModal.scss'

export default function InfoModal(props) {

  return (
    <section id="InfoModal">
      <div className="modal__content">
        {props.children}
      </div>
      <div onClick={props.dismissModal} className="button__ok">{props.buttonText}</div>
    </section>
  )
}