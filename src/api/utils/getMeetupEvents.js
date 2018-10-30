const meetup = require("meetup-api");
const meetupToken = process.env.MEETUP_API_KEY;

const getEvents = async () => {
  let muSDK = meetup(meetupToken);
  // TODO get events from Meetup API and clean up
  return [];
};

module.exports = getEvents;
