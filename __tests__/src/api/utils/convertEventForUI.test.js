import {
  convertMeetupEvent,
  convertEventbriteEvent
} from "../../../../src/api/utils/convertEventForUI";
import meetupEvent from "./data/meetupEvent";
import eventbriteEvent from "./data/eventbriteEvent";
import { meetupUI, eventbriteUI } from "./data/uiEventObjects";

test("Should convert Meetup event to UI-digestible object", () => {
  let meetupUiEvent = convertMeetupEvent(meetupEvent);
  expect(meetupUiEvent).not.toBeNull();
  expect(meetupUiEvent).toEqual(meetupUI);
});

test("Should convert Eventbrite event to UI-digestible object", () => {
  let eventbriteUiEvent = convertEventbriteEvent(eventbriteEvent);
  expect(eventbriteUiEvent).not.toBeNull();
  expect(eventbriteUiEvent).toEqual(eventbriteUI);
});
