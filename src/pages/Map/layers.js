
export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'places',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#FFC107', 100, '#FFA000', 250, '#f28705'],
    'circle-radius': ['step', ['get', 'point_count'], 15, 30, 25, 100, 35]
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'places',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};

