window.function = async function(key1, jsonstring) {
    if (jsonstring.value === undefined || jsonstring.value === '') return "En attente json...";
    let json = JSON.parse(jsonstring.value);
    const apiUrl = json.url;
    const requestOptions = { mode: 'no-cors' };
    console.log("apiUrl:", apiUrl);
    console.log("requestOptions:", requestOptions);
    try {
        let delivery = await api(apiUrl); // await here
        console.log("delivery:", delivery);
        return delivery;
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching data"; // Handle error accordingly
    }
};

async function api(apiUrl){ // async keyword here
    try {
        const response = await fetch(apiUrl);
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
