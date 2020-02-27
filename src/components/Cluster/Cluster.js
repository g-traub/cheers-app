import React from 'react';
import { Marker } from 'react-map-gl';

//style
import './Cluster.scss'

export default function Cluster(props) {
  const [longitude, latitude] = props.clusterData.geometry.coordinates

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
    >
      <div
        className="cluster-marker"
        // style={{
        //   width: `${pointCount}px`,
        //   height: `${pointCount}px`
        // }}
      >
        {props.clusterData.properties.avg.toFixed(2)}&euro;
      </div>
    </Marker>
  )
}
