function AddLocation() {
    console.log("hi");
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const latitude = parseFloat(document.getElementById('latitude').value); 
    const longitude = parseFloat(document.getElementById('longitude').value);
    const company = document.getElementById('company').value;

    const newLocation = { name, address, phone, latitude, longitude, company };

    console.log(newLocation);
    

    fetch('https://localhost:7215/api/Location', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLocation)
    })
    .then(response => {
        console.log(response); 
    })

    .then(message => {
        alert('Location added!');
        console.log(message);
        document.getElementById('add').value = ''; 
    })
    .catch(error => {
        console.error('Error adding location:', error);
        document.getElementById('add').innerText = 'Error adding.';
    });
}

function deleteLocation() {
    const Name = document.getElementById('delete').value;

    fetch(`https://localhost:7215/api/Location/${Name}`, { 
        method: 'DELETE'
    })
    .then(response => {
        console.log(response);
        
    })
    .then(message => {
        alert('Location deleted!');
        console.log(message);
        document.getElementById('delete').value = ''; 
    })
    .catch(error => {
        console.error('Error deleting location:', error);
        document.getElementById('delete').innerText = 'Error deleting.';
    });
}
function updateLocation() {
    const id = document.getElementById('update-id').value; 
    const name = document.getElementById('update-name').value;
    const address = document.getElementById('update-address').value;
    const phone = document.getElementById('update-phone').value;
    const latitude = parseFloat(document.getElementById('update-latitude').value);
    const longitude = parseFloat(document.getElementById('update-longitude').value);
    const company = document.getElementById('update-company').value;

    const updatedLocation = { name, address, phone, latitude, longitude, company };

    fetch(`https://localhost:7215/api/Location?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedLocation)
    })
    .then(response => {
        console.log(response);
        
    })
    .then(message => {
        alert('Location updated!');
        console.log(message);
        document.getElementById('update').value = ''; 
    })
    .catch(error => {
        console.error('Error updating location:', error);
        document.getElementById('update').innerText = 'Error updating.';
    });
}
