import React, {useMemo} from 'react';
import { Marker } from 'react-map-gl';

const ICON = `M12.2848 36.1021C12.2582 36.0599 12.2304 36.0159 12.2015 35.97C11.8804 35.4603 11.4213 34.7245 10.8703 33.8211C9.7681 32.0137 8.29915 29.5374 6.83084 26.8594C5.36165 24.1799 3.89761 21.3066 2.80223 18.7038C1.69777 16.0794 1 13.8017 1 12.2848C1 6.05182 6.05182 1 12.2848 1C18.5178 1 23.5696 6.05182 23.5696 12.2848C23.5696 13.8017 22.8719 16.0794 21.7674 18.7038C20.672 21.3066 19.208 24.1799 17.7388 26.8594C16.2705 29.5374 14.8015 32.0137 13.6993 33.8211C13.1483 34.7245 12.6893 35.4603 12.3682 35.97C12.3393 36.0159 12.3115 36.0599 12.2848 36.1021Z`;

function BarPins(props) {
  const { data, onClick, selectedBar } = props;
  
  const bars = useMemo(
    () => {
      return data.map(bar => {
        const selected = selectedBar ? selectedBar.id === bar.properties.id : null;
        return (
          <Marker key={`marker-${bar.properties.id}`} longitude={bar.geometry.coordinates[0]} latitude={bar.geometry.coordinates[1]}>
            <svg
              height={selected ? 50 : 35}
              viewBox="0 0 25 38"
              style={{
                cursor: 'pointer',
                fill: selected ? '#FFA000' : '#FFE082',
                stroke: '#FAFAFA',
                transform: `translate(${-(selected ? 50 : 35) / 2}px,${-(selected ? 50 : 35)}px)`
              }}
              onClick={() => onClick(bar)}
            >
              <path d={ICON} />
            </svg>
          </Marker>
        )
      })
    }, [selectedBar]
  )
  return (
    <div>{bars}</div>
    
  )
}

export default BarPins;