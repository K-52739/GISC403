
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-40.884/172.913], 5.13);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/K-52739/mapbox://styles/gdmckenzie/clu1ok3u3000901ra7mosaocf/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
The_University_of_Auckland = L.marker([-36.851937,174.768937]).addTo(map)
	.bindPopup('This is where I finished my secondary school education, and started my journey in tertiary education.');

WelTec = L.marker([-41.224688,174.883562]).addTo(map)
	.bindPopup('This is where I further explored my passion in exercise science.');

Victoria_University_of_Wellington = L.marker([-41.290063,174.767938]).addTo(map)
	.bindPopup('This is where I was introduced to GIS, and completed my undergraduate degree in environmental science.');

The_University_of_Canterbury = L.marker([-43.522437,172.579437]).addTo(map)
	.bindPopup('This is where I am currently, completing my Master's in GIS').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.5,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-40.598687,175.584187],
		[-40.652313,175.752687],
		[-40.960313,175.689813],
		[-41.033062,175.530687],
		[-40.993562,175.456313]
	],{
		color: 'blue',
		fillColor: '#f03',
	}).addTo(map).bindPopup('This is where I was raised in the Wairarapa.');




// END OF DOCUMENT
