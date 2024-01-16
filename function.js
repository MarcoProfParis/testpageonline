window.function = async function(apikey, recherche) {
  try {
    var myHeaders = new Headers();
    let apikeyvalue = apikey.value;
    myHeaders.append("X-API-KEY", `${apikeyvalue}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "q": recherche.value,
      "num": 3
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch(`https://google.serper.dev/search`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received data:", data);

    const casNumbers = extractCAS(data);
    console.log("CAS Numbers:", casNumbers);

    const jsonString = JSON.stringify(casNumbers); // Convert the object to a JSON string
    return jsonString;
  } catch (error) {
    console.error("Error:", error);
    return JSON.stringify({ error: error.message });
  }
};

function extractCAS(jsonData) {
  const casNumbers = [];

  if (jsonData && jsonData.organic && Array.isArray(jsonData.organic)) {
    jsonData.organic.forEach(item => {
      const titleMatches = item.title.match(/\b\d{2,7}-\d{2}-\d\b/g);
      const snippetMatches = item.snippet.match(/\b\d{2,7}-\d{2}-\d\b/g);

      if (titleMatches) {
        casNumbers.push(...titleMatches);
      }

      if (snippetMatches) {
        casNumbers.push(...snippetMatches);
      }
    });
  }

  return casNumbers;
}
