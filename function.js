window.function = async function(key1,json) {
if (json.value === undefined) {
  return "undefined";
};
console.log("json raw",${json.value});

let json = JSON.parse(json.value);
console.log("json parsed",${json.value});
return key1.value;
};
