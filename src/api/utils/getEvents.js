const getEventsFromEventbrite = require("./getEventbriteEvents");
const getEventsFromMeetup = require("./getMeetupEvents");
const CacheService = require("../cache");
const removeDuplicates = require("./removeDuplicates");
const convertEventForUi = require("./convertEventForUI");

const cache = new CacheService();

const filterUniqueEvents = (_eventsRaw) =>
  removeDuplicates.arrayOfObjects({ list: _eventsRaw, key: "id" });

const getNewEvents = async (apiName) => {
  try {
    switch (apiName) {
      case "eventbrite":
        let ebEventsRaw = await getEventsFromEventbrite();
        let uniqueEbEvents = await filterUniqueEvents(ebEventsRaw);
        let cleanEbEvents = await Promise.all(uniqueEbEvents.map(convertEventForUi.eventbrite));
        return cleanEbEvents.filter((e) => e);

      case "meetup":
        let muEventsRaw = await getEventsFromMeetup();
        let uniqueMuEvents = await filterUniqueEvents(muEventsRaw);
        let cleanMuEvents = await Promise.all(uniqueMuEvents.map(convertEventForUi.meetup));
        return cleanMuEvents.filter((e) => e);

      default:
        return [];
    }
  } catch (error) {
    return [];
  }
};

const getEvents = async (apiName) => {
  return cache.get(apiName, () => getNewEvents(apiName));
};

module.exports = getEvents;
