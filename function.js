window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "3En attente json...";
console.log("json string",jsonstring);
console.log("json string value",jsonstring.value);
let json = JSON.parse(jsonstring.value);
console.log("json parsed",json);
console.log("json parsed value",JSON.stringify(json));
console.log("json.key",json.key);
return json.key;
};

