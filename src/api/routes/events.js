const router = require("express").Router();
const eventbrite = require("eventbrite");
const meetup = require("meetup-api");
const meetupToken = process.env.MEETUP_API_KEY;
const eventbriteToken = process.env.EVENTBRITE_OAUTH_TOKEN;

router.get("/meetup", (req, res) => {
  const muSDK = meetup(meetupToken);
  // TODO magic
  res.status(200).send({
    events: null
  });
});

router.get("/eventbrite", (req, res) => {
  const ebSDK = eventbrite({ token: eventbriteToken });
  // TODO magic
  res.status(200).send({
    events: null
  });
});

module.exports = router;
