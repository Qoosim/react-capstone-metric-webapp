const GET_DATA = 'weather/GET_DATA';

const initialState = [];

export const fetchDataFromApi = (weather) => ({
  type: GET_DATA,
  payload: weather,
});

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default weatherReducer;
