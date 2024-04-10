window.function = async function(key1, jsonstring) {
    if (!jsonstring) return "En attente json..."; // Check if JSON string is provided
    let json;
    try {
        json = JSON.parse(jsonstring);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return "Error parsing JSON"; // Handle error accordingly
    }
    
    const apiUrl = json.url;
    const requestOptions = { mode: 'no-cors' };
    console.log("apiUrl:", apiUrl);
    console.log("requestOptions:", requestOptions);
    try {
        let delivery = await api(apiUrl,requestOptions); // await here
        console.log("delivery:", delivery);
        return delivery;
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching data"; // Handle error accordingly
    }
};

async function api(apiUrl,requestOptions){ // async keyword here
    try {
        const response = await fetch(apiUrl,requestOptions);
        console.log("response:", response);
        const text = await response.text();
        console.log("text:", text);
        let data = JSON.parse(text);
        return data.delivery;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}
