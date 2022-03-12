const SET_DATA = 'metrics-webapp/covid19/SET_DATA';
const SET_IS_FIRST_RENDER = 'metrics-webapp/covid19/SET_IS_FIRST_RENDER';
const SET_TODAYS_DATE = 'metrics-webapp/covid19/SET_TODAYS_DATE';

const basedUrl = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = {
  data: null,
  isFirstRender: true,
  todaysDate: null,
  covidDataTotalMock: {
    today_confirmed: 0,
    today_deaths: 0,
    today_recovered: 0,
    today_new_confirmed: 0,
    today_new_deaths: 0,
    today_new_recovered: 0,
  },
};

export const setData = (payload) => ({
  type: SET_DATA,
  payload,
});

export const setIsFirstRender = (payload) => ({
  type: SET_IS_FIRST_RENDER,
  payload,
});

export const setTodaysDate = (payload) => ({
  type: SET_TODAYS_DATE,
  payload,
});

const fetchDataFromApi = async (date) => {
  const url = `${basedUrl}${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getFetchedData = (date) => (dispatch) => {
  fetchDataFromApi(date).then((data) => {
    dispatch(setTodaysDate(date));
    dispatch(setIsFirstRender(false));
    dispatch(setData(data));
  });
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_IS_FIRST_RENDER:
      return {
        ...state,
        isFirstRender: action.payload,
      };
    case SET_TODAYS_DATE:
      return {
        ...state,
        todaysDate: action.payload,
      };
    default:
      return state;
  }
};

export default covidReducer;
