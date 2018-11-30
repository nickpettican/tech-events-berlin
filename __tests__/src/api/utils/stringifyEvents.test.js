import stringifyEvents from "../../../../src/api/utils/stringifyEvents";
import { meetupUI, eventbriteUI } from "./data/uiEventObjects";

test("Should stringify events", () => {
  let meetupResult = "[{\"origin\":\"meetup\",\"name\":\"PM-Meetup #32: Project Canvas: visual tool for customer-oriented project design\",\"eventUrl\":\"https://www.meetup.com/PMBerlin/events/255259506/\",\"id\":\"255259506\",\"photoUrl\":\"https://secure.meetupstatic.com/photos/event/8/a/b/global_475142219.jpeg\",\"timeStart\":1541527200000,\"timeEnd\":1541534400000,\"attendees\":107,\"waitlistCount\":0,\"venue\":{\"name\":\"N26\",\"address\":\"Klosterstraße 62, 10179 Berlin\",\"city\":\"Berlin\"},\"organiser\":{\"name\":\"Project Management Meetup Berlin\",\"url\":\"https://www.meetup.com/PMBerlin\"}}]";
  let eventbriteResult = "[{\"origin\":\"eventbrite\",\"name\":\" Technology and Crypto-economics for Blockchain Layer-2 Scalability\",\"eventUrl\":\"https://www.eventbrite.com/e/technology-and-crypto-economics-for-blockchain-layer-2-scalability-tickets-52189342729?aff=ebapi\",\"id\":\"52189342729\",\"photoUrl\":\"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52246150%2F273681713813%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=0%2C60%2C1920%2C960&s=24901abb9cd34de3b463ace965752ad8\",\"timeStart\":1541440800000,\"timeEnd\":1541448000000,\"attendees\":null,\"waitlistCount\":null,\"venue\":{\"name\":\"Karl-Liebknecht-Straße 5\",\"address\":\"Karl-Liebknecht-Straße 5, 10178 Berlin\",\"city\":\"Berlin\"},\"organiser\":{\"name\":\"Celer Network\",\"url\":\"https://www.eventbrite.com/o/celer-network-17891261251\"}}]";
  expect(stringifyEvents([meetupUI])).toBe(meetupResult);
  expect(stringifyEvents([eventbriteUI])).toBe(eventbriteResult);
});
