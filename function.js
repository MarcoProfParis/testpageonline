window.function = async function(key1,json) {
let jsont = JSON.parse(json.value);
console.log("json parsed",jsont);
return key1.value;
};

