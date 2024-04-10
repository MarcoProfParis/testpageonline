window.function = async function(key1,json) {
if (json.value === undefined) return "En attente json...";
let jsont = JSON.parse(json.value);
console.log("json parsed",jsont);
return key1.value;
};

