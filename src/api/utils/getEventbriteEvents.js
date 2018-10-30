const eventbrite = require("eventbrite").default;
const eventbriteToken = process.env.EVENTBRITE_OAUTH_TOKEN;

const getEvents = async () => {
  let ebSDK = eventbrite({ token: eventbriteToken });
  let techEvents = await ebSDK.request(
    "/events/search/?location.address=Berlin&sort_by=date&categories=101,102&subcategories=1001,1008,2002,2003,2004,2005,2006,2007"
  );
  ebSDK.request();
  let blockchainEvents = await ebSDK.request(
    "/events/search/?location.address=Berlin&sort_by=date&q=blockchain,crypto"
  );
  // TODO merge and clean up duplicates
  return [];
};

module.exports = getEvents;
