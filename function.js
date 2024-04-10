window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "2En attente json...";
let json = JSON.parse(jsonstring);

return json.key;

};

