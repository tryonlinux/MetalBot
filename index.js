const axios = require("axios");
var keys = require("./keys.json");
var botID = keys.botID;
var chatID = keys.chatID;
var metalAPIKey = keys.metalAPIKey;
async function sendMessage(message) {
  try {
    const response = await axios.get(
      `https://api.telegram.org/${botID}/sendMessage?chat_id=${chatID}&text=${message}`
    );
  } catch (error) {
    console.error(error);
  }
}

async function getMetalPrices() {
  try {
    const response = await axios.get(
      `https://metals-api.com/api/latest?access_key=${metalAPIKey}`
    );
    //divide 1 by price to get price per ounce in USD
    let goldPrice = "$" + (1 / response.data.rates.XAU).toFixed(2);
    let silverPrice = "$" + (1 / response.data.rates.XAG).toFixed(2);
    let platinumPrice = "$" + (1 / response.data.rates.XPT).toFixed(2);
    let palladiumPrice = "$" + (1 / response.data.rates.XPD).toFixed(2);
    sendMessage(
      `Gold Price: ${goldPrice}\nSilver Price: ${silverPrice}\nPlatinum Price: ${platinumPrice}\nPalladium Price: ${palladiumPrice}`
    );
  } catch (error) {
    console.error(error);
  }
}

getMetalPrices();
