const convertMeetupEvent = (meetupEvent) => {
  try {
    let {
      id,
      name,
      photo_url,
      venue,
      event_url,
      yes_rsvp_count,
      time,
      waitlist_count,
      group,
      duration
    } = meetupEvent;
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
      }
    };
  } catch (error) {
    return null;
  }
};

const convertEventbriteEvent = (eventbriteEvent) => {
  try {
    let { id, name, url, start, end, organizer, venue, logo } = eventbriteEvent;
    return {
      name: name.text,
      id,
      eventUrl: url,
      photoUrl: logo.url,
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
      }
    };
  } catch (error) {
    return null;
  }
};

module.exports = {
  convertMeetupEvent,
  convertEventbriteEvent
};
