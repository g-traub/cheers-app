import React from 'react';
import { Marker } from 'react-map-gl';

//style
import './Cluster.scss'

export default function Cluster(props) {
  const [longitude, latitude] = props.clusterData.geometry.coordinates
  
  const { point_count: pointCount } = props.clusterData.properties

  const size = (pointCount + 10) * 2;
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      className="clusterMarker"
    >
      <div
        className="cluster-marker"
        onClick={() => props.zoomToCluster(props.clusterData.properties.cluster_id, latitude, longitude)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translate(${-size / 2}px,${-size / 2}px)`,
        }}
      >
        {props.clusterData.properties.avg.toFixed(1)}&euro;
      </div>
    </Marker>
  )
}
