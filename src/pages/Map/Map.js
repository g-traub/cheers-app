import React, { useState, useEffect, useRef } from 'react';
import MapGL, { FlyToInterpolator, GeolocateControl } from 'react-map-gl';
import useSupercluster from "use-supercluster";

// services
import { getAllBars, getOpenBars, getFilteredBars } from 'services/bars'

// components
import Menu from 'components/Menu/Menu'
import FilterSelected from 'components/FilterSelected/FilterSelected'
import BarPin from 'components/BarPin/BarPin'
import Cluster from 'components/Cluster/Cluster'

// styles
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss'

function Map() {
  // mapbox data
  const MAPBOXTOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  const mapStyle = 'mapbox://styles/guillaumetrb/ck6jgtsnn137j1imuq0ll8w8b'

  // setup map
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 48.857704,
    longitude: 2.339466,
    zoom: 11.5,
    minZoom: 1,
    maxZoom: 17.5
  });
  const mapRef = useRef();

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

  // data filters for querying api
  const [filters, setFilters] = useState({
    price: { value: null, active: false },
    terrace: { value: null, active: false },
    endHour: { value: null, active: false },
    endHappy: { value: null, active: false }
  });

  // load data (initially & on filters change)
  const [data, setData] = useState(null);
  const points = data ? data.features.map(feature => {
    parseFloat(feature.geometry.coordinates[0])
    parseFloat(feature.geometry.coordinates[1])
    return feature
  }) : []

  useEffect(() => {
    if (Object.values(filters).every(filter => !filter.active)) {
      getOpenBars().then(bars => {
        setData(bars)
      })
    } else {
      getFilteredBars(filters).then(bars => {
        setData(bars)
      })
    }

  }, [filters]);

  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current
      .getMap()
      .getBounds()
      .toArray()
      .flat()
    : null;

  // clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: {
      radius: 75,
      maxZoom: 15,
      map: (props) => ({
        count: 1,
        sum: parseFloat(props.priceNormal)
      }),
      reduce: (accumulated, props) => {
        accumulated.count += props.count
        accumulated.sum += props.sum;
        accumulated.avg = accumulated.sum / accumulated.count;
      }
    },
  });

  const zoomToCluster = (clusterId, latitude, longitude) => {
    const zoom = supercluster.getClusterExpansionZoom(clusterId)
    setViewport({ 
      ...viewport,
      latitude, 
      longitude,
      zoom,
      transitionInterpolator: new FlyToInterpolator({
        speed: 2
      }),
      transitionDuration: 'auto'
    })
  }

  // menu interaction
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const closeMenu = () => {
    setisMenuOpen(false)
  }

  // bar selection 
  const [selectedBar, setSelectedBar] = useState(null);

  const showBarInfos = (bar) => {
    setActiveContent('bar')
    setisMenuOpen(true)
    setSelectedBar(bar.properties)
  };

  return (
    <section id="Map">
      {/* <FilterSelected /> */}
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOXTOKEN}
        mapStyle={mapStyle}
        onClick={closeMenu}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const { cluster: isCluster } = cluster.properties;

          // we have a cluster to render
          if (isCluster) {
            return <Cluster clusterData={cluster} key={`cluster-${cluster.id}`} zoomToCluster={zoomToCluster} />
          }

          // we have a single point (bar) to render
          return <BarPin key={cluster.properties.id} barData={cluster} showBarInfos={showBarInfos} selected={selectedBar ? selectedBar.id === cluster.properties.id : false} />
        })}

        {/* <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
      </MapGL>

      {/* <Menu isMenuOpen={isMenuOpen} selectedBar={selectedBar} setisMenuOpen={setisMenuOpen} activeContent={activeContent} setActiveContent={setActiveContent} filters={filters} setFilters={setFilters} /> */}
    </section>
  );
}

export default Map;