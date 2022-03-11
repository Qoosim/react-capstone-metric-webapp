import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInputHook from '../hooks/inputHook';
import { getDataFromApi } from '../redux/covid19/covid19';
import Country from './Country';
import Header from './Header';
import Search from './Search';
import Total from './Total';

const Home = () => {
  const dispatch = useDispatch();
  const covidDataNull = useSelector((state) => state.covidData.data);
  const covidDataContent = useSelector((state) => state.covidData);
  const isFirstRender = useSelector((state) => state.covidData.isFirstRender);
  const date = useSelector((state) => state.covidData.todaysDate);
  const covidDataTotalMock = useSelector((state) => state.covidData.covidDataTotalMock);
  const { value: countryValue, onChange: countryOnChange, clear: countryClear } = useInputHook('');
  const covidDataTotal = covidDataNull ? covidDataContent.total : covidDataTotalMock;

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
      <Header title={"Today's stats"} />
      <main className="pt-5 bg-custom1 text-white min-vh-100">
        <Container fluid="md" className="pt-1 pt-sm-2 pt-md-3 pt-lg-4 px-0">
          <Total covidDataTotal={covidDataTotal} />
          {covidDataNull ? (
            <>
              <Search value={countryValue} onChange={countryOnChange} clear={countryClear} />
              <h2 className="text-center h6 my-2">STATS BY COUNTRY</h2>
              <Row xs={2} md={3} lg={4} xl={5} className="mx-0 gx-0">
                {Object.entries(covidDataNull.dates[date].countries)
                  .filter(
                    ([name]) => name.toLowerCase().startsWith(countryValue.toLowerCase()),
                  )
                  .map(([name, info]) => {
                    const {
                      id,
                      today_confirmed: confirmedTotal,
                      today_deaths: deathsTotal,
                      today_recovered: recoveredTotal,
                    } = info;

                    return (
                      <Country
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

export default Home;

/*
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import { fetchDataFromApi, getData } from '../redux/covid19/covid19';

const Home = () => {
  const covidData = useSelector((state) => state.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi().then((result) => dispatch(getData(result)));
  }, []);

  return (
    <>
      {
        covidData.map(([countryName, countryInfo]) => {
          const {
            id,
          } = countryInfo;

          return (
            <Country
              key={id}
              name={countryName}
              info={countryInfo}
            />
          );
        })
      }
    </>
  );
};

export default Home;
*/
