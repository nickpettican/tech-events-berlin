const getEventsFromEventbrite = require("./getEventbriteEvents");
const getEventsFromMeetup = require("./getMeetupEvents");
const CacheService = require("../cache");
const removeDuplicates = require("./removeDuplicates");
const convertEventForUi = require("./convertEventForUI");

const cache = new CacheService();

const getEventsFromAPI = (apiName) => {
  switch (apiName) {
    case "eventbrite":
      return getEventsFromEventbrite();

    case "meetup":
      return getEventsFromMeetup();

    default:
      return Promise.reject("apiName does not match either 'meetup' nor 'eventbrite'");
  }
};

const cleanUpEvents = (_events, apiName) => {
  return Promise.all(_events.map(convertEventForUi[apiName]));
};

const getNewEvents = async (apiName) => {
  try {
    let eventsRaw = await getEventsFromAPI(apiName);
    let uniqueEvents = await removeDuplicates.arrayOfObjects({ list: eventsRaw, key: "id" });
    let cleanEvents = await cleanUpEvents(uniqueEvents, apiName);
    return cleanEvents.filter((e) => e);
  } catch (error) {
    return [];
  }
};

const getEvents = async (apiName) => {
  return cache.get(apiName, () => getNewEvents(apiName));
};

module.exports = getEvents;
