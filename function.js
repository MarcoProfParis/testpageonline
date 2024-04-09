window.function = async function(APIKEY, ENDPOINT, QUERYSTRING) {
if (QUERYSTRING.value === undefined) return "En attente de QUERYSTRING";
    const headers = {
        'X-CMC_PRO_API_KEY': APIKEY.value,
        'Accept': 'application/json'
    };

    // Constructing URL with query parameters
    const url = new URL(ENDPOINT.value);
const QUERY = QUERYSTRING.value;
    if (QUERY) {
        Object.keys(QUERY.value).forEach(key => url.searchParams.append(key, QUERY[key]));
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


