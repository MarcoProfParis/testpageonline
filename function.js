window.function = async function(key1,json) {
let json = JSON.parse(json.value);
console.log("json parsed",json.value);
return key1.value;
};

