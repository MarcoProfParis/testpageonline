window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "8En attente json...";
let json = JSON.parse(jsonstring);
const apiUrl = json.url;
console.log("apiUrl",apiUrl);

return json.key;

};

