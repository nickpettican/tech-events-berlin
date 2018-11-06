import eventbriteEvent from "../__tests__/src/api/utils/data/eventbriteEvent";

const axios = jest.fn((request, opts) => {
  let { method, data } = opts;
  if (method === "GET") {
    if (Boolean(request.match(/eventbrite/))) {
      return {
        data: [eventbriteEvent]
      };
    }
    return {
      data: [1, 2, 3]
    };
  } else if (method === "POST") {
    return {
      status: 209
    };
  } else {
    return {
      status: 209
    };
  }
});

export const get = jest.fn((request, opts) => {
  let { method, data } = opts;
  if (Boolean(request.match(/eventbrite/))) {
    return {
      data: [eventbriteEvent]
    };
  }
  return {
    data: [1, 2, 3]
  };
});

export default axios;
