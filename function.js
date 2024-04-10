window.function = async function(key1,jsonstring) {
if (jsonstring.value === undefined) return "6En attente json...";
let json = JSON.parse(jsonstring);
const apiUrl = 'https://cex.io/api/ticker/BTC/USD';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   console.log("response",response.json());
return json.key
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

};

