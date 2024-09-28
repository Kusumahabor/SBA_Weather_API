document.addEventListener('DOMContentLoaded', function() {
    const donateForm = document.getElementById('donateForm');
    
    donateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        
        // Regex for name (letters, spaces, and hyphens only)
        const nameRegex = /^[a-zA-Z\s-]+$/;
        
        // Regex for amount (positive numbers, optional decimal point, up to two decimal places)
        const amountRegex = /^\d+(\.\d{1,2})?$/;
        
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (letters, spaces, and hyphens only).');
            return;
        }
        
        if (!amountRegex.test(amount)) {
            alert('Please enter a valid amount (positive number with up to two decimal places).');
            return;
        }
        
        alert(`Thank you, ${name}, for your donation of $${amount}!`);
        donateForm.reset();
    });
});

// Weather data for each city stored in an array of objects
const weatherData = [
    { city: "New York", temperature: 22, condition: "Sunny" },
    { city: "Los Angeles", temperature: 25, condition: "Clear" },
    { city: "Chicago", temperature: 15, condition: "Cloudy" },
    { city: "Houston", temperature: 28, condition: "Humid" },
    { city: "Phoenix", temperature: 35, condition: "Sunny" },
    { city: "Tampa", temperature: 15, condition: "Hurricane" },
    { city: "Dallas", temperature: 30, condition: "Clear" },
    { city: "San Francisco", temperature: 18, condition: "Foggy" },
    { city: "Seattle", temperature: 16, condition: "Rainy" },
    { city: "Atlanta", temperature: 20, condition: "Rainy" },
    { city: "Columbus", temperature: 19, condition: "Partly Cloudy" },
    { city: "Denver", temperature: 23, condition: "Sunny" },
    { city: "Washington DC", temperature: 21, condition: "Partly Cloudy" }
];

// Function to create a table row for a city
function createRow(cityWeather) {
    const row = document.createElement('tr');

    // Loop through the properties of the cityWeather object
    for (let property in cityWeather) {
        const cell = document.createElement('td');
        cell.textContent = cityWeather[property];
        row.appendChild(cell);
    }

    return row;
}

// Function to update the table based on selected city
function updateTable(selectedCity) {
    const weatherTableBody = document.getElementById('weatherTable');
    weatherTableBody.innerHTML = ''; // Clear existing rows

    const cityWeather = weatherData.find(data => data.city === selectedCity);
    if (cityWeather) {
        const newRow = createRow(cityWeather);
        weatherTableBody.appendChild(newRow);
        }
}

// Event listener for the dropdown
document.getElementById('refer').addEventListener('change', function() {
     const selectedCity = this.value;
     updateTable(selectedCity);
});

