const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CARD_DATA_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_CARD_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case 'FETCH_CARD_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default homeReducer;
  