import React, { useState } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';

import { clusterLayer, clusterCountLayer } from './layers';
import { geojsonData } from './data/data_2020-01-14-144409'

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

  return (
    <MapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle={mapStyle}
      interactiveLayerIds={[clusterLayer.id]}
    >
      <Source
        type="geojson"
        data={geojsonData}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
      </Source>
    </MapGL>

  );
}

export default Map;