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
  const casNumbers = extractCAS(Data);
  const jsonString = JSON.stringify(casNumbers); // Convert the object to a JSON string
    return jsonString;
  
}

function extractCAS(jsonData) {
  const casNumbers = [];

  jsonData.organic.forEach(item => {
    // Use a regular expression to match CAS numbers
    const matches = item.snippet.match(/\b\d{2,7}-\d{1}-\d\b/g);
    if (matches) {
      casNumbers.push(...matches);
    }
  });

  return casNumbers;
}


