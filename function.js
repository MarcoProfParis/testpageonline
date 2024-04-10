window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "32En attente json...";
let json = JSON.parse(jsonstring.value);
const apiUrl = json.url;
const requestOptions = {method: 'GET',mode: 'no-cors'};
const reponse = await fetch(apiUrl,requestOptions);
console.log("reponse:", reponse);
console.log("reponse:", reponse.json());
return key1.value;

};