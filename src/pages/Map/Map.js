import React, { useState, useEffect } from 'react';
import MapGL, { Source, Layer, GeolocateControl } from 'react-map-gl';
import axios from 'axios';

// components
import Menu from 'components/Menu/Menu'
import BarPins from 'components/BarPins/BarPins'
// icons
import barPin from 'assets/icons/barPin.png'
// layers
import { clusterCircleLayer } from './layers';
// map style
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  // data
  const MAPBOXTOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  const mapStyle = 'mapbox://styles/guillaumetrb/ck6jgtsnn137j1imuq0ll8w8b'

  const apiUrl = 'https://project-cheers.herokuapp.com/api'

  // state
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
    minZoom: 11
  });

  const geolocateControlStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: 0,
    right: 0,
    margin: 10
  }

  const [data, setData] = useState(null);

  // effects
  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `${apiUrl}/geojson`,
      );

      setData(response.data);
      localStorage.setItem('barsData', JSON.stringify(response.data));
    }

    const localData = localStorage.getItem('barsData') || null;
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      fetchData();
    }

  }, []);

  // Functions 
  const load = (map) => {
    map.target.loadImage(barPin, (error, image) => {
      if (error) console.log(error)
      map.target.addImage('barPin', image)
    })
  };

  const showBarInfos = (bar) => {
    console.log('pin', bar)
  };

  return (
    <section id="Map">
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOXTOKEN}
        mapStyle={mapStyle}
        onLoad={load}
      >
        {data &&
          <BarPins data={data.features} onClick={showBarInfos} />}

        <Source
          id="bars-clubs"
          type="geojson"
          data={data}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterCircleLayer} />
        </Source>

        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
      <Menu />
    </section>
  );
}

export default Map;