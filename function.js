window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "En attente json...";
let json = JSON.parse(jsonstring.value);
const apiUrl = json.url;
const requestOptions = {method: 'GET',mode: 'no-cors'};
// const response = await fetch(apiUrl,requestOptions);
// console.log("response:", response);
// const data = await response.json();
try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log("reponse:", data);
    return key1.value;
} catch (error) {
    console.error('Error:', error);
    throw error; // You may handle errors differently as per your requirement
}

};