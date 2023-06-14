// Function to fetch data
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.example.com/data') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Function to display data on the webpage
function displayData(data) {
    const container = document.getElementById('dataContainer');

    // Clear existing content
    container.innerHTML = '';

    // Iterate over the data and create HTML elements
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = item.title;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = item.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

// Fetch data and display on the webpage
fetchData()
    .then(data => displayData(data))
    .catch(error => console.log(error));

