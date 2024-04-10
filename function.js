window.function = async function(key1, jsonstring) {
    if (jsonstring.value === undefined || jsonstring.value === '') return "En attente json...";
    let json = JSON.parse(jsonstring.value);
    const apiUrl = json.url;
    
    try {
       const response = await fetch(apiUrl);
        const text = await response.text();
let data = JSON.parse(text);
       return data.delivery;
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching data"; // Handle error accordingly
    }
};
