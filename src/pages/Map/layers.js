export const clusterIconLayer = {
  id: 'cluster',
  type: 'symbol',
  source: 'places',
  filter: ['has', 'point_count'],
  layout: {
    'icon-image': ['step', ['get', 'point_count'], 'smileIcon', 100, 'happyIcon'],
    'icon-size': ['step', ['get', 'point_count'], 0.25, 30, 0.35, 100, 0.5]
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

