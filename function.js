window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "7En attente json...";
let json = JSON.parse(jsonstring);
const apiUrl = json.url;
console.log("apiUrl",apiUrl);
const requestOptions = {
  method: 'GET'
};
console.log("requestOptions", requestOptions);
console.log("requestOptions string",JSON.stringify(requestOptions));
const reponse = await fetch(apiUrl,requestOptions);
console.log("reponse",reponse);
return json.key;

};

