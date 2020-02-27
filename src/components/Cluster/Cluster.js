import React from 'react';
import { Marker } from 'react-map-gl';

//style
import './Cluster.scss'

export default function Cluster(props) {
  const [longitude, latitude] = props.clusterData.geometry.coordinates
  const { point_count: pointCount, avg } = props.clusterData.properties

  const size = pointCount*1.5 + 30 ;
  const getClusterColor = () => {
    if (avg > 7) {
      return '#ffe38d'
    } else if (avg > 6) { 
      return '#ffd451'
    }
    else if (avg > 5) { 
      return '#ffc107' 
    }
    else {
      return '#ffa000'
    }
  }

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
          backgroundColor: getClusterColor()
        }}
      >
        {avg.toFixed(1)}&euro;
      </div>
    </Marker>
  )
}
