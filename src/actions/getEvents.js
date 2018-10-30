import axios from "axios";
import { GET_EVENTS_FAILURE, GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS } from "./types";

const getEventsFromRest = async (provider) => {
  try {
    let res = await axios(`/rest/${provider}`, {
      method: "GET"
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default (params) => async (dispatch) => {
  dispatch({
    type: GET_EVENTS_REQUEST
  });
  try {
    let eventsAll = await Promise.all(["meetup", "eventbrite"].map(getEventsFromRest));
    let events = [].concat(...eventsAll).filter((e) => e);
    dispatch({
      type: GET_EVENTS_SUCCESS,
      payload: events
    });
  } catch (error) {
    dispatch({
      type: GET_EVENTS_FAILURE,
      payload: error
    });
  }
};
