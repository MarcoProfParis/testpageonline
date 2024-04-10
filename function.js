window.function = async function(key1, jsonstring) {
    if (jsonstring.value === undefined || jsonstring.value === '') return "En attente json...";
    let json = JSON.parse(jsonstring.value);
    const apiUrl = json.url;
    const requestOptions = {mode: 'no-cors'};
    console.log("apiUrl:", apiUrl);
    console.log("requestOptions:", requestOptions);
    try {
    let delivery = api(apiUrl);
    console.log("delivery:", delivery);
    return delivery;
    }
};

function api(apiUrl){
    const response = await fetch(apiUrl);
        console.log("response1:", response);
       const text = await response.text();
       console.log("text:", text);
        let data = JSON.parse(text);
        return data.delivery;
}