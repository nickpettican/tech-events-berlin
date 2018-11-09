const router = require("express").Router();
const getEventbriteEvents = require("../utils/getEventbriteEvents");
const getMeetupEvents = require("../utils/getMeetupEvents");
const stringify = require("../utils/stringifyEvents");

router.get("/eventbrite", async (req, res) => {
  let events = await getEventbriteEvents();
  res.status(200).send(stringify(events));
});

router.get("/meetup", async (req, res) => {
  let events = await getMeetupEvents();
  res.status(200).send(stringify(events));
});

module.exports = router;
