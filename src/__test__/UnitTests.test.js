import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Country from '../components/Country';
import Region from '../components/Region';
import Search from '../components/Search';
import Total from '../components/Total';

const [countryName, countryRegion,
  confirmedTotal, deathsTotal,
  recoveredTotal, index,
] = [
  'Argentina',
  'Mendoza',
  200,
  10,
  112,
  0,
];

const covidDataTotalMock = {
  today_confirmed: 210,
  today_deaths: 10,
  today_recovered: 112,
  today_new_confirmed: 2,
  today_new_deaths: 0,
  today_new_recovered: 10,
};

describe('testing snapshots for the child components', () => {
  test('testing snapshot for Country component', () => {
    const tree = render(
      <Router>
        <Country
          index={index}
          name={countryName}
          confirmedTotal={confirmedTotal}
          deathsTotal={deathsTotal}
          recoveredTotal={recoveredTotal}
        />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('testing snapshot for Region component', () => {
    const tree = render(
      <Router>
        <Region
          index={index}
          name={countryRegion}
          confirmedTotal={confirmedTotal}
          deathsTotal={deathsTotal}
          recoveredTotal={recoveredTotal}
        />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('testing snapshot for Total component', () => {
    const tree = render(
      <Total
        covidDataTotal={covidDataTotalMock}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('testing snapshot for Search component', () => {
    const tree = render(
      <Search
        value=""
        onChange={() => {}}
        clear={() => {}}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
