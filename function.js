window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "En attente json...";
let json = JSON.parse(jsonstring.value);
const apiUrl = json.url;
const requestOptions = {method: 'GET'};
const reponse = fetch(apiUrl,requestOptions);
console.log("reponse:", reponse);
return key1.value;

};

