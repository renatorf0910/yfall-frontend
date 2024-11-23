import axios from "axios";

export const FETCH_CARD_DATA_REQUEST = 'FETCH_CARD_DATA_REQUEST';
export const FETCH_CARD_DATA_SUCCESS = 'FETCH_CARD_DATA_SUCCESS';
export const FETCH_CARD_DATA_FAILURE = 'FETCH_CARD_DATA_FAILURE';

export const fetchCardData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CARD_DATA_REQUEST });

    try {
      const response = await axios.get('/item');
      dispatch({ type: FETCH_CARD_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_CARD_DATA_FAILURE, error: error.message });
    }
  };
};
