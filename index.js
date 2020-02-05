const request = require("request");
// product_id and token can be found at https://console.maytapi.com/settings/token
const product_id = "aae999cf-0207-4ddc-ab5f-cd830d05ad08";
const secret_token = "a53e11d4-0a33-41cf-8e84-a66a7d924952";
// phone_id can be found at https://console.maytapi.com/ or from  /api/<product_id>/listPhones endpoint.
const phone_id = "1049";
let url = `https://api.maytapi.com/api/${product_id}/${phone_id}/sendMessage`;

const data = [
    {
        to_number: "+51978493230", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51993685730", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51997570446", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51992439534", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51933551817", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51962711999", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    },
    {
        to_number: "+51992263960", // Receivers phone
        message: "Hello, WhatsApp API", // Message
        type: "text" // Message type
    }
]
data.forEach(element => {
    
request({
    url: url,
    method: "POST",
    headers: {
      "x-maytapi-key": secret_token
    },
    json: element
  });
});