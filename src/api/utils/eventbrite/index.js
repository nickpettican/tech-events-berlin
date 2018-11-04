const axios = require("axios");

const sdk = ({ token = null }) => {
  const baseUrl = "https://www.eventbriteapi.com/v3";
  const defaultOptions = { headers: { Authorization: token ? `Bearer ${token}` : "" } };
  return {
    request: (url, options = {}) =>
      axios.get(baseUrl.concat(url).concat("&expand=venue,organizer"), {
        ...defaultOptions,
        ...options
      })
  };
};

module.exports = sdk;
