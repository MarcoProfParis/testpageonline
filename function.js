window.function = async function(key1,json) {
console.log("json raw",${json.value});

let json = JSON.parse(json.value);
console.log("json parsed",${json.value});
return json.key.value;
};
