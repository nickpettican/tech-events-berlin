const defaultPhotoUrl = "/img/default-event-photo.png";

const meetup = ({
  id,
  name,
  photo_url = defaultPhotoUrl,
  venue,
  event_url,
  yes_rsvp_count,
  time,
  waitlist_count,
  group,
  duration
}) => {
  try {
    return {
      name,
      id,
      eventUrl: event_url,
      photoUrl: photo_url,
      venue: {
        name: venue.name,
        address: venue.address_1,
        city: venue.city
      },
      timeStart: time,
      timeEnd: time + duration,
      attendees: yes_rsvp_count,
      waitlistCount: waitlist_count,
      organiser: {
        name: group.name,
        url: `https://www.meetup.com/${group.urlname}`
      },
      origin: "meetup"
    };
  } catch (error) {
    return null;
  }
};

const eventbrite = (eventbriteEvent) => {
  try {
    let { id, name, url, start, end, organizer, venue, logo } = eventbriteEvent;
    return {
      name: name.text,
      id,
      eventUrl: url,
      photoUrl: logo.url || defaultPhotoUrl,
      venue: {
        name: venue.address.address_1,
        address: venue.address.localized_address_display,
        city: venue.address.city
      },
      timeStart: new Date(start.utc).getTime(),
      timeEnd: new Date(end.utc).getTime(),
      attendees: null,
      waitlistCount: null,
      organiser: {
        name: organizer.name,
        url: organizer.url
      },
      origin: "eventbrite"
    };
  } catch (error) {
    return null;
  }
};

module.exports = {
  meetup,
  eventbrite
};
