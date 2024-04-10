window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "En attente json...";
let json = JSON.parse(jsonstring);

console.log("apiUrl ", json.url);

let apiUrl = json.url;
console.log("apiUrl3 ",apiUrl);
console.log("apiUrl2 ",json.url);
return json.key;

};

