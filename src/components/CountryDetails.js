import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromApi, getData } from '../redux/covid19/covid19';
import Country from './Country';

const CountryDetails = () => {
  const covidData = useSelector((state) => state.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi().then((result) => dispatch(getData(result)));
  }, []);

  return (
    <>
      {
        covidData.map(([countryName, countryInfo]) => (
          <Country
            key={countryInfo.id}
            countryName={countryName}
            countryInfo={countryInfo}
          />
        ))
      }
    </>
  );
};

export default CountryDetails;
