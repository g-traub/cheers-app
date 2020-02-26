import React, { useState, useEffect } from 'react';
import MapGL, { FlyToInterpolator, Source, Layer, GeolocateControl } from 'react-map-gl';
// services
import { getOpenBars } from 'services/bars'
// components
import Menu from 'components/Menu/Menu'
import FilterSelected from 'components/FilterSelected/FilterSelected'
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
    height: '100vh',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
    minZoom: 11,
    maxZoom: 19
  });

  const [data, setData] = useState(null);
  const [selectedBar, setSelectedBar] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null)

  // effects
  useEffect(() => {
    const localData = localStorage.getItem('barsData')
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      getOpenBars().then(bars => {
        setData(bars)
      })
    }

  }, []);

  const showBarInfos = (bar) => {
    setActiveContent('bar')
    setisMenuOpen(true)
    setSelectedBar(bar.properties)
  };

  const closeMenu = () => {
    setisMenuOpen(false)
  }

  return (
    <section id="Map">
      <FilterSelected/>
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

      <Menu isMenuOpen={isMenuOpen} selectedBar={selectedBar} setisMenuOpen={setisMenuOpen} activeContent={activeContent} setActiveContent={setActiveContent}/>
    </section>
  );
}

export default Map;