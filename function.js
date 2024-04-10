window.function = async function(key1, jsonstring) {
    if (jsonstring.value === undefined || jsonstring.value === '') return "En attente json...";
    let json;
    try {
        json = JSON.parse(jsonstring.value);
    } catch (error) {
        console.error('Invalid JSON:', jsonstring.value);
        throw new Error('Invalid JSON');
    }
    const apiUrl = json.url;
    const requestOptions = {method: 'GET', mode: 'no-cors'};
    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        console.log("reponse:", data);
        return key1.value;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
