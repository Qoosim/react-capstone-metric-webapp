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
