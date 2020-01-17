import React, { useState } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';

import { clusterIconLayer } from './layers';
// data
import { geojsonData } from './data/data_2020-01-14-144409'
// icons
import happyIcon from 'assets/markers/happy.png'
import smileIcon from 'assets/markers/smile.png'
// map style
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const TOKEN = 'pk.eyJ1IjoiZ3VpbGxhdW1ldHJiIiwiYSI6ImNrNWF3aDV2MzFiZjkzbnBhM3M4anIybzQifQ.A0PdDZWEzaB3UxEgocXjCw';

  const mapStyle = 'mapbox://styles/guillaumetrb/ck5ayj7fu17og1cs5y26xe3vs'

  // @TODO : set some boundries

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
    minZoom: 11
  });

  const load = (map) => {
    map.target.loadImage(happyIcon, (error, image) => {
      if (error) console.log(error)
      map.target.addImage('happyIcon', image)
    })
    map.target.loadImage(smileIcon, (error, image) => {
      if (error) console.log(error)
      map.target.addImage('smileIcon', image)
    })
  }

  return (
    <MapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle={mapStyle}
      onLoad={load}
    >
      <Source
        type="geojson"
        data={geojsonData}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterIconLayer} />
      </Source>
    </MapGL>

  );
}

export default Map;