window.function = async function(APIKEY, ENDPOINT, QUERYSTRING) {
    if (QUERYSTRING.value === undefined) {
        console.log("2Waiting for QUERYSTRING");
        return "2Waiting for QUERYSTRING";
    }

    console.log("API Key:", APIKEY.value);
    console.log("Endpoint:", ENDPOINT.value);
    console.log("Query String:", QUERYSTRING.value);

    const headers = {
        'X-CMC_PRO_API_KEY': APIKEY.value,
        'Accept': 'application/json'
    };

    // Constructing URL with query parameters
    const url = new URL(ENDPOINT.value);
    const QUERY = QUERYSTRING.value;
    if (QUERY) {
        Object.keys(QUERY).forEach(key => {
        url.searchParams.append(key, QUERY[key]);
console.log(" url",url
        });
    }

    try {
        console.log("Fetching data from:", url.href);
        const response = await fetch('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC', {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
