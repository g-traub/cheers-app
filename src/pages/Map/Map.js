import React, { useState, useEffect } from 'react';
import MapGL, { Source, Layer, GeolocateControl } from 'react-map-gl';
import axios from 'axios';

// layers
import { clusterIconLayer } from './layers';
// icons
import happyIcon from 'assets/markers/happy.png'
import smileIcon from 'assets/markers/smile.png'
// map style
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  // data
  const MAPBOXTOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  const mapStyle = 'mapbox://styles/guillaumetrb/ck5ayj7fu17og1cs5y26xe3vs'

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
    position: 'absolute',
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
    }
    fetchData();
  }, []);

  // Functions 
  const load = (map) => {
    map.target.loadImage(happyIcon, (error, image) => {
      if (error) console.log(error)
      map.target.addImage('happyIcon', image)
    })
    map.target.loadImage(smileIcon, (error, image) => {
      if (error) console.log(error)
      map.target.addImage('smileIcon', image)
    })
  };

  return (
    <MapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOXTOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onLoad={load}
    >
      {/* <Source
        id="bars-clubs"
        type="geojson"
        data={data}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterIconLayer} />
      </Source> */}
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </MapGL>

  );
}

export default Map;