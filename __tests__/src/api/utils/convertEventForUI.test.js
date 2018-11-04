import {
  convertMeetupEvent,
  convertEventbriteEvent
} from "../../../../src/api/utils/convertEventForUI";

const meetupEvent = {
  utc_offset: 3600000,
  venue: {
    country: "de",
    localized_country_name: "Germany",
    city: "Berlin",
    address_1: "Klosterstraße 62, 10179 Berlin",
    name: "N26",
    lon: 13.412334,
    id: 25372935,
    lat: 52.516106,
    repinned: false
  },
  headcount: 0,
  distance: 1.3886890411376953,
  visibility: "public",
  waitlist_count: 0,
  created: 1538641295000,
  maybe_rsvp_count: 0,
  description:
    "<p>The Project Canvas is an effective instrument for joint definition of a novel project. The instrument is especially useful for interdisciplinary groups that have never worked together before. The Project Canvas brings the essential questions of complex projects to the point. Through its visual form and natural language, it facilitates a dialogue that puts all those involved on an equal footing and leads to a common understanding of their project.</p> <p>In the workshop, several teams will apply the Project Canvas to real projects. Do you have a new and challenging project? Use this opportunity to apply the Project Canvas live and get more clarity about your project with the help of others. All participants can actively experiment with the Project Canvas and will ultimately be able to employ it effectively in their own context.</p> <p>Karen helps people to collaborate with courage, curiosity, and creativity to achieve outstanding results. In her 20 years management and consulting career, she has supported people in projects and C-level executives in all kinds of organizations across Europe. She connects project superpowers, leadership and facilitation skills with agile and positive change practices</p>",
  event_url: "https://www.meetup.com/PMBerlin/events/255259506/",
  yes_rsvp_count: 107,
  duration: 7200000,
  name: "PM-Meetup #32: Project Canvas: visual tool for customer-oriented project design",
  id: "255259506",
  photo_url: "https://secure.meetupstatic.com/photos/event/8/a/b/global_475142219.jpeg",
  time: 1541527200000,
  updated: 1539601566000,
  group: {
    join_mode: "open",
    created: 1369387965000,
    name: "Project Management Meetup Berlin",
    group_lon: 13.380000114440918,
    id: 8622522,
    urlname: "PMBerlin",
    group_lat: 52.52000045776367,
    who: "Projectees"
  },
  status: "upcoming"
};

const eventbriteEvent = {
  name: {
    text: " Technology and Crypto-economics for Blockchain Layer-2 Scalability",
    html: " Technology and Crypto-economics for Blockchain Layer-2 Scalability"
  },
  description: {
    text:
      "Off-chain scaling techniques such as state channel and side chains are able to support truly scale-out dApps with better privacy and no compromise on the trust-free guarantee.\nDespite its high potentials, off-chain scaling is still in its infancy with challenges remaining unsolved. For example, how to construct state channels that support arbitrary state transitions with minimal on-chain operations? How to route payments to achieve high throughput in an off-chain network that is fundamentally different from data networks? How to help developers to easily build and operate scalable off-chain dApps? How to guarantee that off-chain states are always available for possible disputes?\nIn this meetup, we will describe how Celer Network meets these challenges. Celer embraces a layered architecture with clean abstractions that enable rapid evolution of each individual component, including generalized state channels that supports fast and generic off-chain state transitions; a provably optimal payment routing algorithm that achieves orders of magnitude higher throughput compared to state-of-the-art solutions; a powerful development framework and runtime for off-chain dApps; and an incentive-aligned mechanism that provides stable liquidity and high off-chain state availability. We provide our vision for Celer Network 2.0, a grand unification of all off-chain scaling technologies into a single solution. \nWe will also have time to mingle, have some nice beer and fun :D \nThis event is also joined by our friends from Quarkchain and MXC! \n-Celer Network Team",
    html:
      "<P>Off-chain scaling techniques such as state channel and side chains are able to support truly scale-out dApps with better privacy and no compromise on the trust-free guarantee.<BR></P>\n<P>Despite its high potentials, off-chain scaling is still in its infancy with challenges remaining unsolved. For example, how to construct state channels that support arbitrary state transitions with minimal on-chain operations? How to route payments to achieve high throughput in an off-chain network that is fundamentally different from data networks? How to help developers to easily build and operate scalable off-chain dApps? How to guarantee that off-chain states are always available for possible disputes?</P>\n<P>In this meetup, we will describe how Celer Network meets these challenges. Celer embraces a layered architecture with clean abstractions that enable rapid evolution of each individual component, including generalized state channels that supports fast and generic off-chain state transitions; a provably optimal payment routing algorithm that achieves orders of magnitude higher throughput compared to state-of-the-art solutions; a powerful development framework and runtime for off-chain dApps; and an incentive-aligned mechanism that provides stable liquidity and high off-chain state availability. We provide our vision for Celer Network 2.0, a grand unification of all off-chain scaling technologies into a single solution. </P>\n<P>We will also have time to mingle, have some nice beer and fun :D </P>\n<P>This event is also joined by our friends from Quarkchain and MXC! </P>\n<P>-Celer Network Team</P>"
  },
  id: "52189342729",
  url:
    "https://www.eventbrite.com/e/technology-and-crypto-economics-for-blockchain-layer-2-scalability-tickets-52189342729?aff=ebapi",
  start: {
    timezone: "Europe/Berlin",
    local: "2018-11-05T19:00:00",
    utc: "2018-11-05T18:00:00Z"
  },
  end: {
    timezone: "Europe/Berlin",
    local: "2018-11-05T21:00:00",
    utc: "2018-11-05T20:00:00Z"
  },
  organization_id: "273681713813",
  created: "2018-11-04T12:25:51Z",
  changed: "2018-11-04T12:32:51Z",
  capacity: null,
  capacity_is_custom: null,
  status: "live",
  currency: "EUR",
  listed: true,
  shareable: true,
  online_event: false,
  tx_time_limit: 480,
  hide_start_date: false,
  hide_end_date: false,
  locale: "en_US",
  is_locked: false,
  privacy_setting: "unlocked",
  is_series: false,
  is_series_parent: false,
  is_reserved_seating: false,
  show_pick_a_seat: false,
  show_seatmap_thumbnail: false,
  show_colors_in_seatmap_thumbnail: false,
  source: "create_2.0",
  is_free: true,
  version: "3.0.0",
  logo_id: "52246150",
  organizer_id: "17891261251",
  venue_id: "27741812",
  category_id: "102",
  subcategory_id: "2004",
  format_id: "9",
  resource_uri: "https://www.eventbriteapi.com/v3/events/52189342729/",
  is_externally_ticketed: false,
  organizer: {
    description: {
      text:
        "Celer Network is an Internet-scale, trust-free, and privacy-preserving off-chain scaling platform where everyone can quickly build, operate, and use highly scalable decentralized applications. It is not a standalone blockchain but a generic networked system running on top of existing and future blockchains. It provides unprecedented performance and flexibility through innovations in off- chain scaling techniques and a crypto economics model designed based on game theory principles to bring essential value to the off-chain ecosystem. Celer Network is founded by PhDs from MIT, Princeton, UC Berkeley and UIUC and has a very strong engineering team with years of industry experiences from top startups or tech giants like Google, Amazon, Oracle, Cisco, and HP.\r\n\r\nFollow us at:\r\n\r\nWebsite: https://www.celer.network/\r\nMedium: https://medium.com/celer-network\r\nTwitter: https://twitter.com/CelerNetwork\r\nTelegram: https://t.me/celernetwork\r\nGithub: https://github.com/celer-network\r\n",
      html:
        '<P><SPAN>Celer Network is an Internet-scale, </SPAN>trust-free<SPAN>, and privacy-preserving off-chain scaling platform where everyone can quickly build, operate, and use highly scalable decentralized applications. It is not a standalone blockchain but a generic networked system running on top of existing and future blockchains. It provides unprecedented performance and flexibility through innovations in off- chain scaling techniques and a crypto economics model designed based on game theory principles to bring essential value to the off-chain ecosystem. Celer Network is founded by PhDs from MIT, Princeton, UC Berkeley and UIUC and has a very strong engineering team with years of industry experiences from top startups or tech giants like Google, Amazon, Oracle, Cisco, </SPAN>and<SPAN> HP.</SPAN></P>\r\n<P><SPAN></SPAN></P>\r\n<H3>Follow us at:</H3>\r\n<UL CLASS="postList">\r\n<LI CLASS="graf graf--li graf-after--h3">Website: <A CLASS="markup--anchor markup--li-anchor" HREF="https://www.celer.network/" TARGET="_blank" DATA-HREF="https://www.celer.network/" REL="noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow">https://www.celer.network/</A></LI>\r\n<LI CLASS="graf graf--li graf-after--li">Medium: <A CLASS="markup--anchor markup--li-anchor" HREF="https://medium.com/celer-network" TARGET="_blank" DATA-HREF="https://medium.com/celer-network" REL="noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow">https://medium.com/celer-network</A></LI>\r\n<LI CLASS="graf graf--li graf-after--li">Twitter: <A CLASS="markup--anchor markup--li-anchor" HREF="https://twitter.com/CelerNetwork" TARGET="_blank" DATA-HREF="https://twitter.com/CelerNetwork" REL="noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow">https://twitter.com/CelerNetwork</A></LI>\r\n<LI CLASS="graf graf--li graf-after--li">Telegram: <A CLASS="markup--anchor markup--li-anchor" HREF="https://t.me/celernetwork" TARGET="_blank" DATA-HREF="https://t.me/celernetwork" REL="noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow">https://t.me/celernetwork</A></LI>\r\n<LI CLASS="graf graf--li graf-after--li graf--trailing">Github: <A CLASS="markup--anchor markup--li-anchor" HREF="https://github.com/celer-network" TARGET="_blank" DATA-HREF="https://github.com/celer-network" REL="noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer noopener noopener noopener noopener noopener noreferrer noopener nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow noreferrer nofollow nofollow noopener noreferrer nofollow noreferrer nofollow noreferrer nofollow">https://github.com/celer-network</A></LI>\r\n</UL>'
    },
    long_description: {
      text: null,
      html: null
    },
    logo: {
      crop_mask: null,
      original: null,
      id: "51849206",
      url: "https://cdn.evbuc.com/images/51849206/273681713813/2/logo.png",
      aspect_ratio: null,
      edge_color: null,
      edge_color_set: null
    },
    resource_uri: "https://www.eventbriteapi.com/v3/organizers/17891261251/",
    id: "17891261251",
    name: "Celer Network",
    url: "https://www.eventbrite.com/o/celer-network-17891261251",
    vanity_url: "http://celernetwork.eventbrite.com",
    num_past_events: 1,
    num_future_events: 2,
    website: "http://celer.network",
    twitter: "CelerNetwork",
    logo_id: "51849206"
  },
  venue: {
    address: {
      address_1: "Karl-Liebknecht-Straße 5",
      address_2: null,
      city: "Berlin",
      region: "Berlin",
      postal_code: "10178",
      country: "DE",
      latitude: "52.5201033",
      longitude: "13.40385409999999",
      localized_address_display: "Karl-Liebknecht-Straße 5, 10178 Berlin",
      localized_area_display: "Berlin",
      localized_multi_line_address_display: ["Karl-Liebknecht-Straße 5", "10178 Berlin"]
    },
    resource_uri: "https://www.eventbriteapi.com/v3/venues/27741812/",
    id: "27741812",
    age_restriction: null,
    capacity: null,
    name: "TECHCODE BERLIN",
    latitude: "52.5201033",
    longitude: "13.40385409999999"
  },
  logo: {
    crop_mask: {
      top_left: {
        x: 0,
        y: 60
      },
      width: 1920,
      height: 960
    },
    original: {
      url:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52246150%2F273681713813%2F1%2Foriginal.jpg?auto=compress&s=d07771e044785c640fdeb6f037c9dfec",
      width: 1920,
      height: 1080
    },
    id: "52246150",
    url:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52246150%2F273681713813%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=0%2C60%2C1920%2C960&s=24901abb9cd34de3b463ace965752ad8",
    aspect_ratio: "2",
    edge_color: "#000000",
    edge_color_set: true
  }
};

const meetupUI = {
  name: "PM-Meetup #32: Project Canvas: visual tool for customer-oriented project design",
  event_url: "https://www.meetup.com/PMBerlin/events/255259506/",
  id: "255259506",
  photo_url: "https://secure.meetupstatic.com/photos/event/8/a/b/global_475142219.jpeg",
  venue: {
    name: "N26",
    address: "Klosterstraße 62, 10179 Berlin",
    city: "Berlin"
  },
  time_start: 1541527200000,
  time_end: 1541527200000 + 7200000,
  attendees: 107,
  waitlist_count: 0,
  organiser: {
    name: "Project Management Meetup Berlin",
    url: "https://www.meetup.com/PMBerlin"
  }
};

const eventbriteUI = {
  name: " Technology and Crypto-economics for Blockchain Layer-2 Scalability",
  event_url:
    "https://www.eventbrite.com/e/technology-and-crypto-economics-for-blockchain-layer-2-scalability-tickets-52189342729?aff=ebapi",
  id: "52189342729",
  photo_url:
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52246150%2F273681713813%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=0%2C60%2C1920%2C960&s=24901abb9cd34de3b463ace965752ad8",
  venue: {
    name: "Karl-Liebknecht-Straße 5",
    address: "Karl-Liebknecht-Straße 5, 10178 Berlin",
    city: "Berlin"
  },
  time_start: 1541440800000,
  time_end: 1541448000000,
  attendees: null,
  waitlist_count: null,
  organiser: {
    name: "Celer Network",
    url: "https://www.eventbrite.com/o/celer-network-17891261251"
  }
};

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
