const eventbrite = require("eventbrite").default;
const eventbriteToken = process.env.EVENTBRITE_OAUTH_TOKEN;
const CacheService = require("../cache");

const cache = new CacheService();

const getEventsFromAPI = async () => {
  try {
    let ebSDK = eventbrite({ token: eventbriteToken });
    let techEvents = await ebSDK.request(
      "/events/search/?location.address=Berlin&sort_by=date&categories=101,102&subcategories=1001,1008,2002,2003,2004,2005,2006,2007"
    );
    let blockchainEvents = await ebSDK.request(
      "/events/search/?location.address=Berlin&sort_by=date&q=blockchain,crypto"
    );
    let eventsRaw = techEvents.concat(blockchainEvents);
    // TODO merge and clean up duplicates
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getEvents = async () => {
  return cache.get("eventbrite", getEventsFromAPI);
};

module.exports = getEvents;
