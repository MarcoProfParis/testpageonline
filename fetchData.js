window.fetchData = async function() {
    try {
        // URL to fetch data from
        var apiUrl = document.getElementById("apiUrl").value;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display data on the webpage
        document.getElementById("result").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById("result").textContent = "Error fetching data. Please check the URL and try again.";
    }
}
