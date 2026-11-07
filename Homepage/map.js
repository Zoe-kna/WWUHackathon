const map = L.map('mapItems', {
  //center: [48.73, -122.49],
  zoom: 13, 
});

// Attempt to locate the user and set the view to their location
map.locate({ setView: true, maxZoom: 13 });

map.on('locationerror', () => {
    map.setView([48.73, -122.49], 13); // Default to Bellingham if location not found
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create example markers for protests, events, and petitions
const protest1 = L.marker([48.73, -122.49]).bindPopup('Protest 1');
const protest2 = L.marker([48.74, -122.48]).bindPopup('Protest 2');
const protest3 = L.marker([48.72, -122.50]).bindPopup('Protest 3');

const event1 = L.marker([48.75, -122.47]).bindPopup('Event 1');
const event2 = L.marker([48.71, -122.51]).bindPopup('Event 2');
const event3 = L.marker([48.73, -122.46]).bindPopup('Event 3');

const petition1 = L.marker([48.76, -122.49]).bindPopup('Petition 1');
const petition2 = L.marker([48.70, -122.48]).bindPopup('Petition 2');
const petition3 = L.marker([48.74, -122.52]).bindPopup('Petition 3');

// group the markers into layer groups
const protests = L.layerGroup([protest1, protest2, protest3]);
const events = L.layerGroup([event1, event2, event3]);
const petitions = L.layerGroup([petition1, petition2, petition3]);

// display the layer groups on the map
protests.addTo(map);
events.addTo(map);
petitions.addTo(map);

L.control.layers(null, {
  'Protests': protests,
  'Events': events,
  'Petitions': petitions
}).addTo(map);