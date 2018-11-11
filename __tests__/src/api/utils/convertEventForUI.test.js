import {
  meetup as convertMeetup,
  eventbrite as convertEventbrite
} from "../../../../src/api/utils/convertEventForUI";
import meetupEvent from "./data/meetupEvent";
import eventbriteEvent from "./data/eventbriteEvent";
import { meetupUI, eventbriteUI } from "./data/uiEventObjects";

test("Should convert Meetup event to UI-digestible object", () => {
  let meetupUiEvent = convertMeetup(meetupEvent);
  expect(meetupUiEvent).not.toBeNull();
  expect(meetupUiEvent).toEqual(meetupUI);
});

test("Should convert Eventbrite event to UI-digestible object", () => {
  let eventbriteUiEvent = convertEventbrite(eventbriteEvent);
  expect(eventbriteUiEvent).not.toBeNull();
  expect(eventbriteUiEvent).toEqual(eventbriteUI);
});
