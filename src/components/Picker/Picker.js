import React, { useState, useLayoutEffect, useRef } from 'react';
// style
import './Picker.scss';

const _debounce = require('lodash/debounce');

export default function Picker(props) {
  const isIntersecting = (target, root) => {
    const {right, left} = root.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    if (targetRect.right - targetRect.right * 0.1 < right && targetRect.left + targetRect.left * 0.1 > left) {
      props.handleChange(target.textContent)
    }
  }
  
  const handleScroll = event => {
    const eventTarget = event.target
      for (let childNode of eventTarget.childNodes) {
        _debounce(() => isIntersecting(childNode, selectorRef.current), 100)()
      }
  }
  
  // data
  const selectorRef = useRef(null);
  const values = props.values.map((value, index) => {
    return (
      <PickerValue value={value} rootRef={selectorRef.current} selected={value === props.value} key={index} />
    )
  });
  
  // state
  const [dimensions, setDimensions] = useState({});
  
  //hooks
  useLayoutEffect(() => {
    setDimensions({ height: '35px', width: '50px' });
  }, []);

  return (
    <div id="Picker">
      <div className="picker__label">{props.label}</div>
      <div className="picker__sliderContainer">
        <div ref={selectorRef} className="picker__selector" style={{ width: dimensions.width, height: dimensions.height }}>
          {Boolean(selectorRef.current) && <ol className="picker__values" onScroll={handleScroll}>{values}</ol>}
        </div>
      </div>
    </div>
  )
}

function PickerValue(props) {
  const ref = useRef(null)

  const scrollTo = (elt, behaviour) => {
    elt.scrollIntoView({ behavior: behaviour, inline: "center" });
  }

  useLayoutEffect(() => {
    if(props.selected) scrollTo(ref.current, 'instant')
  }, []);

  return (
    <li ref={ref} onClick={() => scrollTo(ref.current, 'smooth')} className="picker__value">{props.value}</li>
  )
}