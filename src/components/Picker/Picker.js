import React, { useState, useLayoutEffect, useRef } from 'react';

// style
import './Picker.scss';

function Picker(props) {

  const eltRef = useRef(null);
  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    setDimensions(eltRef.current.getBoundingClientRect());
  }, []);

  const values = props.values.map((value, index) => {
    if (index === 0) {
      return <li ref={eltRef} onClick={() => props.handleChange(value)} className="picker__value" key={index}>{value}</li>
    }

    return <li onClick={() => props.handleChange(value)} className="picker__value" key={index}>{value}</li>
  })

  return (
    <div id="Picker">
      <div className="picker__label">{props.label}</div>
      <div className="picker__sliderContainer">
        <ol className="picker__values">{values}</ol>
        <div className="picker__selector" style={{ width: dimensions.width, height: dimensions.height }}></div>
      </div>
    </div>
  )
}
export default Picker;