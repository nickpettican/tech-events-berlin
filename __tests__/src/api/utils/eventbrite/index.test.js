import axios from "axios";
import eventbrite from "../../../../../src/api/utils/eventbrite";
import eventbriteEvent from "../data/eventbriteEvent";

jest.mock("axios");

test("Should return mock data", async () => {
  let ebSDK = eventbrite({ token: "superSecret" });
  let { data } = await ebSDK.request("extension");
  expect(data[0]).toEqual(eventbriteEvent);
});
