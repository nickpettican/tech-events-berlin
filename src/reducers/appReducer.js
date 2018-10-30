import { GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from "../actions/types";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_EVENTS_SUCCESS:
      let events = action.payload;
      return {
        ...state,
        events,
        isLoading: false
      };

    case GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
