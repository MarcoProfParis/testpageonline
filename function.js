window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "2En attente json...";
let json = JSON.parse(jsonstring);
const apiUrl = 'https://cex.io/api/ticker/BTC/USD';
const requestOptions = {
  method: 'GET'
};
const reponse = fetch(apiUrl,requestOptions);
console.log("reponse",reponse);
return json.key;

};

