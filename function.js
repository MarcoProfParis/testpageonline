window.function = async function(key1, jsonstring) {
    if (!jsonstring || !jsonstring.value) return "En attente json...";

    try {
        let json = JSON.parse(jsonstring.value);
        if (!json.url) return "JSON is missing 'url' property";
        
        const apiUrl = json.url;
        const response = await fetch(apiUrl);
        const text = await response.text();
        let data = JSON.parse(text);
        return data.delivery;
    } catch (error) {
        console.error("Error:", error);
        return "Error parsing JSON"; // Handle error accordingly
    }
};
