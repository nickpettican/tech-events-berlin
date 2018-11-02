const Meetup = require("meetup-api");
const meetupToken = process.env.MEETUP_API_KEY;
const CacheService = require("../cache");
const removeDuplicates = require("./removeDuplicates");

const cache = new CacheService();

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
          console.error(err);
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
    console.error(error);
    return [];
  }
};

const cleanUpMeetupEvents = (_events) => {
  // TODO create functions to return standardised objects for UI
  return _events;
};

const getNewEvents = async () => {
  let eventsRaw = await getEventsFromAPI();
  let uniqueEvents = await removeDuplicates({ list: eventsRaw, key: "id" });
  let cleanEvents = await cleanUpMeetupEvents(uniqueEvents);
  return cleanEvents;
};

const getEvents = async () => {
  return cache.get("meetup", getNewEvents);
};

module.exports = getEvents;
