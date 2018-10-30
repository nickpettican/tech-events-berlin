const meetup = require("meetup-api");
const meetupToken = process.env.MEETUP_API_KEY;
const CacheService = require("../cache");

const cache = new CacheService();

const getEventsFromAPI = async () => {
  try {
    let muSDK = meetup(meetupToken);
    // TODO get events from Meetup API and clean up
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getEvents = async () => {
  return cache.get("meetup", getEventsFromAPI);
};

module.exports = getEvents;
