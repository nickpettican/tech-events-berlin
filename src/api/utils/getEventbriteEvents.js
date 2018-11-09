const eventbrite = require("./eventbrite");
const eventbriteToken = process.env.EVENTBRITE_OAUTH_TOKEN;
const CacheService = require("../cache");
const removeDuplicates = require("./removeDuplicates");
const convertEventForUi = require("./convertEventForUI").convertEventbriteEvent;

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
    return techEvents.data.events.concat(blockchainEvents.data.events);
  } catch (error) {
    return [];
  }
};

const cleanUpEventbriteEvents = (_events) => {
  return Promise.all(_events.map(convertEventForUi));
};

const getNewEvents = async () => {
  try {
    let eventsRaw = await getEventsFromAPI();
    let uniqueEvents = await removeDuplicates.arrayOfObjects({ list: eventsRaw, key: "id" });
    let cleanEvents = await cleanUpEventbriteEvents(uniqueEvents);
    return cleanEvents.filter((e) => e);
  } catch (error) {
    return [];
  }
};

const getEvents = async () => {
  return cache.get("eventbrite", getNewEvents);
};

module.exports = getEvents;
