let myMap = L.map("mapid", {
    center: [45.52, -122.67],
    zoom: 13
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors'
}).addTo(myMap);



