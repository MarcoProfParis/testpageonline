window.addEventListener("message", async function(event) {
    const { origin, data: { key1, jsonstring } } = event.data; // Extracting key1 and jsonstring from event data

    let result;
    let error;
    try {
        result = await window.function(key1, jsonstring); // Passing key1 and jsonstring to window.function
    } catch (e) {
        result = undefined;
        try {
            error = e.toString();
        } catch (e) {
            error = "Exception can't be stringified.";
        }
    }

    const response = { key: key1 }; // Setting key to key1
    if (result !== undefined) {
        // FIXME: Remove `type` once that's in staging
        response.result = { value: result };
    }
    if (error !== undefined) {
        response.error = error;
    }

    event.source.postMessage(response, "*");
});

function sendMessage() {
    const key1 = document.getElementById("key1").value;
    const jsonstring = document.getElementById("jsonstring").value;

    window.parent.postMessage({ key1, jsonstring }, "*");
}
