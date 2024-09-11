// Initialize the map centered at a default location
const map = L.map('map').setView([37.7749, -122.4194], 10);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


fetch('https://localhost:7215/api/Location') 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        data.forEach(location => {
            const marker = L.marker([location.latitude, location.longitude]).addTo(map);
            marker.bindPopup(`<b>${location.name}</b><br>${location.address}<br>Phone: ${location.phone}<br>Company: ${location.company}`);
        });
    })
    .catch(error => {
        console.error('Error fetching location data:', error);
    });
