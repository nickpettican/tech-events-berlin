const Meetup = require("meetup-api");
const meetupToken = process.env.MEETUP_API_KEY;

const defaultParams = {
  country: "DE",
  city: "Berlin",
  category: 34,
  page: 50
};

const getTechEvents = (muSDK, params = {}) =>
  new Promise((resolve) =>
    muSDK.getOpenEvents(
      {
        ...defaultParams,
        ...params
      },
      (err, res) => {
        if (!err) {
          resolve(res.results);
        } else {
          return [];
        }
      }
    )
  );

const getEventsFromAPI = async () => {
  try {
    let muSDK = new Meetup({ key: meetupToken });
    let techEvents = await getTechEvents(muSDK);
    let blockchainEvents = await getTechEvents(muSDK, { text: "blockchain,crypto" });
    return techEvents.concat(blockchainEvents);
  } catch (error) {
    return [];
  }
};

module.exports = getEventsFromAPI;
