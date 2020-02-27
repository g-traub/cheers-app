import React, { useState, useEffect } from 'react';
import MapGL, { FlyToInterpolator, Source, Layer, GeolocateControl } from 'react-map-gl';
// services
import { getOpenBars, getFilteredBars} from 'services/bars'
// components
import Menu from 'components/Menu/Menu'
import FilterSelected from 'components/FilterSelected/FilterSelected'
import PopupInfo from 'components/PopupInfo/PopupInfo'
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
  const [filters, setFilters] = useState({
    price: {value: null, active: false},
    terrace: {value: null, active: false},
    endHour: {value: null, active: false},
    endHappy: {value: null, active: false}
  });
  const [selectedBar, setSelectedBar] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  // effects
  useEffect(() => {
    if(Object.values(filters).every(filter => !filter.active)){
      getOpenBars().then(bars => {
        setData(bars)
      })
    } else {
      console.log(filters)
      getFilteredBars(filters).then(bars => {
        setData(bars)
      })
    }

  }, [filters]);

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
      <FilterSelected/>
      <PopupInfo/>
      <Menu isMenuOpen={isMenuOpen} selectedBar={selectedBar} setisMenuOpen={setisMenuOpen} activeContent={activeContent} setActiveContent={setActiveContent} filters={filters} setFilters={setFilters}/>
    </section>
  );
}

export default Map;