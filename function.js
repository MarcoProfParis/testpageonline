window.function = async function (apikey,recherche) {
  var myHeaders = new Headers();
  let apikeyvalue = apikey.value;
myHeaders.append("X-API-KEY", `${apikeyvalue}`);
myHeaders.append("Content-Type", "application/json");


var raw = JSON.stringify({
  "q": recherche.value,
  "num":3
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch(`https://google.serper.dev/search`, requestOptions);
  
  const data = await response.json();
  const jsonString = JSON.stringify(data); // Convert the object to a JSON string
    return jsonString;
  
}




