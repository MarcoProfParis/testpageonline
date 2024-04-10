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
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            throw new Error('Invalid JSON in response');
        }
        console.log("reponse:", data);
        return key1.value;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
