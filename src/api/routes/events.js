const router = require("express").Router();
const getEvents = require("../utils/getEvents");
const stringify = require("../utils/stringifyEvents");

router.get("/eventbrite", async (req, res) => {
  let events = await getEvents("eventbrite");
  res.status(200).send(stringify(events));
});

router.get("/meetup", async (req, res) => {
  let events = await getEvents("meetup");
  res.status(200).send(stringify(events));
});

module.exports = router;
