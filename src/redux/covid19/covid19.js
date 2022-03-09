const GET_COVID = 'covid-19/GET_DATA';

const basedUrl = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const getData = (payload) => ({
  type: GET_COVID,
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
    case GET_COVID:
      return [...action.payload];
    default:
      return state;
  }
};

export default covidReducer;
