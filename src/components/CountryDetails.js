import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useInputHook from '../hooks/inputHook';
import { getDataFromApi } from '../redux/covid19/covid19';
import Header from './Header';
import Region from './Region';
import Search from './Search';
import Total from './Total';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const covidDataNull = useSelector((state) => state.covidData.data);
  const isFirstRender = useSelector((state) => state.covidData.isFirstRender);
  const date = useSelector((state) => state.covidData.todaysDate);
  const covidDataTotalMock = useSelector((state) => state.covidData.covidDataTotalMock);
  const { value: regionValue, onChange: regionOnChange, clear: regionClear } = useInputHook('');
  const countryCovidData = covidDataNull
    ? covidDataNull.dates[date].countries[country]
    : covidDataTotalMock;

  useEffect(() => {
    if (isFirstRender) {
      const date = new Date();
      const convertedDate = date.toISOString().replace(/T.+/g, '');
      dispatch(getDataFromApi(convertedDate));
    }
  }, [dispatch, isFirstRender]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={country} backBtn />
      <main className="pt-5 bg-custom1 text-white min-vh-100">
        <Container fluid="md" className="pt-1 pt-sm-2 pt-md-3 pt-lg-4 px-0">
          <Total covidDataTotal={countryCovidData} />
          {covidDataNull && (countryCovidData.regions.length > 0 ? (
            <>
              <Search value={regionValue} onChange={regionOnChange} clear={regionClear} />
              <h2 className="text-center h6 my-2">STATS BY REGION</h2>
              <Row xs={1} md={2} xl={3} className="mx-0 gx-0">
                {countryCovidData.regions
                  .filter(
                    (region) => region.name.toLowerCase().startsWith(regionValue.toLowerCase()),
                  )
                  .map((info) => {
                    const {
                      id,
                      name,
                      today_confirmed: confirmedTotal,
                      today_deaths: deathsTotal,
                      today_recovered: recoveredTotal,
                    } = info;

                    return (
                      <Region
                        key={id}
                        name={name}
                        confirmedTotal={confirmedTotal || 0}
                        deathsTotal={deathsTotal || 0}
                        recoveredTotal={recoveredTotal || 0}
                      />
                    );
                  })}
              </Row>
            </>
          ) : (
            <p className="text-center my-2">No regions found</p>
          ))}
          {!covidDataNull && (
            <Row xs="auto" className="mx-0 justify-content-center align-items-center mt-2">
              <Spinner animation="border" />
              <p className="mb-0">Loading...</p>
            </Row>
          )}
        </Container>
      </main>
    </>
  );
};

export default CountryDetails;

/*
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
*/
