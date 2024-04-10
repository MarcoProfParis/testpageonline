window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "3En attente json...";

console.log("Value of obj.webhook:", key1.value);

return key1.value;

};

