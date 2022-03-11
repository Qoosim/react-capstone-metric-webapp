const GET_COVID = 'covid-19/GET_DATA';
const SET_DATA = 'covid-metrics/covid19/SET_DATA';
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

export const fetchDataFromApi = async () => {
  const date = new Date();
  const formattedDate = date.toISOString().replace(/T.+/g, '');
  const url = `${basedUrl}${formattedDate}`;
  const response = await fetch(url);
  const data = await response.json();
  const formattedData = data.dates[formattedDate].countries;
  const dataConverted = Object.entries(formattedData);
  return dataConverted;
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
