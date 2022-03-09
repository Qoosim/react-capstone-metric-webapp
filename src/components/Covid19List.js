import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromApi, getData } from '../redux/covid19/covid19';

const Covid19List = () => {
  const covids = useSelector((state) => state.covids);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi().then((result) => dispatch(getData(result)));
  }, []);

  return (
    <>
      {
        covids.map(([countryName, countryInfo]) => {
          const {
            id,
            date,
            today_confirmed: todayConfirmed,
            today_deaths: todayDeaths,
            today_new_confirmed: newConfirmed,
            today_new_deaths: newDeaths,
            today_new_open_cases: todayNewCases,
            today_new_recovered: todayNewRecovered,
            today_open_cases: todayOpenCases,
            today_recovered: todayRecovered,
            yesterday_confirmed: yesterdayConfirmed,
            yesterday_deaths: yesterdayDeaths,
            yesterday_open_cases: yesterdayOpenCases,
            yesterday_recovered: yesterdayRecovered,
          } = countryInfo;
          return (
            <div key={id}>
              <ul>
                <li key={id}>
                  {countryName}
                  {date}
                  {todayConfirmed}
                  {todayDeaths}
                  {newConfirmed}
                  {newDeaths}
                  {todayNewCases}
                  {todayNewRecovered}
                  {todayOpenCases}
                  {todayRecovered}
                  {yesterdayConfirmed}
                  {yesterdayDeaths}
                  {yesterdayOpenCases}
                  {yesterdayRecovered}
                </li>
                <br />
              </ul>
            </div>
          );
        })
      }
    </>
  );
};

export default Covid19List;
