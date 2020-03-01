
# Cheers-app

## Projet fil rouge - HETIC
### Link : https://cheers-app.netlify.com/
### Team :
- Lucas Benhayoun *(Designer)*
- Rodrigo Tapia *(Backend)*
- Jeremy Schiappapietre *(Backend)*
- Guillaume Traub *(Front)*

## Choices made:
### SVG, Canvas or webGL ?
I chose to use a combination of webGL and SVG. I used a webGL powered map library, to have the best performance possible for the map, which has a lot of data to render. I built the datavisualization "on top" of the map so I didn't have to get into webGL complexity. We used SVG to display the clusters and individual points on the map, to be able to use DOM events and css interactivity. The use of clusters limits the actual number of nodes rended : approximately 15 to 30, which is really low and can be easily done with SVG's.

### Libraries
| Library | Justification |
|--|--|
| *axios* | easy to use and great browser support (down to IE9) |
| *lodash* | performant and reliable utilities library ; why re-invent the wheel if lodash has a method for it ?  |
| *node-sass* | be able to use scss : variables, nesting, imports... |
| *react-map-gl* | a react wrapper for mapboxGL JS, made by Uber and well maintained. Mapbox is a great map service, highly customizable and already provides some data visualization styles (heatmaps, clusters...). Using react-map-gl left us the possibility to switch to deck.gl which is the webGL data visualization library from Uber, if we needed to. 
| *supercluster* | The only clustering library I found with the ability to aggregate data (we used it for the average beer price), well maintained (made by mapbox) and really performant (demo with 6 million points) |
| *use-supercluster* | custom hook for supercluster, easy to use and improved performance because specific to react  |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Runs the app in the production mode.