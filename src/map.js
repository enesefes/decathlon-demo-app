var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZW5lc2VmZXMiLCJhIjoiY2t1dmFoZ3JuMWZ1ZDJvbzJ1NnB6ZTdvbSJ9.rmGNl8pYUGlYddPdOu5-rg';
var map = new mapboxgl.Map({
  container: 'Custom-map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
