import React, { useState, useEffect } from 'react';
import MapGL, { FlyToInterpolator, Source, Layer, GeolocateControl } from 'react-map-gl';
import axios from 'axios';

// components
import Menu from 'components/Menu/Menu'
import BarPins from 'components/BarPins/BarPins'
// layers
import { clusterCircleLayer } from './layers';
// map style
import 'mapbox-gl/dist/mapbox-gl.css';
//page style
import './Map.scss'

function Map() {
  // data
  const MAPBOXTOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  const mapStyle = 'mapbox://styles/guillaumetrb/ck6jgtsnn137j1imuq0ll8w8b'
  const apiUrl = 'https://project-cheers.herokuapp.com/api'
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

  // state
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100%',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
    minZoom: 11,
    maxZoom: 19
  });

  const [data, setData] = useState(null);
  const [selectedBar, setSelectedBar] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);

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

  const zoomTo = (feature) => {
    setViewport({
      ...viewport,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
      zoom: 17,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 1000
    });
  }

  const showBarInfos = (bar) => {
    zoomTo(bar)
    setSelectedBar(bar.properties)
  };

  const resetViewport = () => {
    setViewport({...viewport, height: '100vh'})
  }

  const closeMenu = () => {
    setisMenuOpen(false)
    resetViewport()
  }

  return (
    <section id="Map">
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOXTOKEN}
        mapStyle={mapStyle}
        onClick={closeMenu}
      >
        {data /* && viewport.zoom > 14 */ &&
          <BarPins data={data.features} onClick={showBarInfos} selectedBar={selectedBar} />}

        {/* <Source
          id="bars-clubs"
          type="geojson"
          data={data}
          cluster={true}
          clusterMaxZoom={13}
          clusterRadius={50}
        >
          <Layer {...clusterCircleLayer} />
        </Source> */}

        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>

      <Menu isMenuOpen={isMenuOpen} selectedBar={selectedBar} resetViewport={resetViewport} setisMenuOpen={setisMenuOpen}/>
    </section>
  );
}

export default Map;