window.function = async function(APIKEY, ENDPOINT, QUERY) {
    const headers = {
        'X-CMC_PRO_API_KEY': APIKEY,
        'Accept': 'application/json'
    };

    // Constructing URL with query parameters
    const url = new URL(ENDPOINT);
    if (QUERY) {
        Object.keys(QUERY).forEach(key => url.searchParams.append(key, QUERY[key]));
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


