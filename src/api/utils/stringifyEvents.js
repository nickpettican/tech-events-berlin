const fastJson = require("fast-json-stringify");

const payloadSchema = {
  title: "Event",
  type: "array",
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      eventUrl: { type: "string" },
      id: { type: "string" },
      photoUrl: { type: "string" },
      timeStart: { type: "number" },
      timeEnd: { type: "number" },
      attendees: {
        anyOf: [{ type: "number" }, { type: "object" }]
      },
      waitlistCount: {
        anyOf: [{ type: "number" }, { type: "object" }]
      },
      venue: {
        type: "object",
        properties: {
          name: {
            anyOf: [{ type: "string" }, { type: "object" }]
          },
          address: {
            type: "string"
          },
          city: {
            type: "string"
          }
        }
      },
      organiser: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          url: {
            type: "string"
          }
        }
      }
    }
  }
};

const stringify = fastJson(payloadSchema);

const stringifyEvent = (obj) => {
  try {
    return stringify(obj);
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = stringifyEvent;
