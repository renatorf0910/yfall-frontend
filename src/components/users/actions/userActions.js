import axios from "axios";

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const createUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register/`, userData);
      const data = await response.data;
      dispatch({ type: CREATE_USER_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.error('Error create_user', error);
      dispatch({ type: CREATE_USER_FAILURE, error: error.message });
      throw new Error(error.message);
    }
  };
};

