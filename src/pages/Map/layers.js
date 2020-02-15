export const clusterCircleLayer = {
  id: 'cluster',
  type: 'circle',
  source: 'bar-clubs',
  filter: ['has', 'point_count'],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': '#FFE082',
    'circle-stroke-width': 2,
    'circle-stroke-color': '#fff',
    'circle-radius': [
      'step',
      ['get', 'point_count'],
      20,
      20,
      10,
      30,
      20,
      40,
      30,
      50,
      40,
      60,
      50,
      70,
      60
    ]
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'bar-clubs',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};