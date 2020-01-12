import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const TOKEN = 'pk.eyJ1IjoiZ3VpbGxhdW1ldHJiIiwiYSI6ImNrNWF3aDV2MzFiZjkzbnBhM3M4anIybzQifQ.A0PdDZWEzaB3UxEgocXjCw';
  
  const mapStyle = 'mapbox://styles/guillaumetrb/ck5ayj7fu17og1cs5y26xe3vs'

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle={mapStyle}
    />
  );
}

export default Map;