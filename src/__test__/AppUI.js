/*
import { fireEvent, render, within } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import MockDate from 'mockdate';
import { Provider } from 'react-redux';
import App from '../App';
import storeForTest from '../redux/storeForTest';
import getCovidDataMock from '../__mocks__/getCovidDataMock';

global.scrollTo = jest.fn();

let tree;
describe('testing UX for the whole App', () => {
  const url = 'https://api.covid19tracking.narrativa.com/api/2022-03-12';

  beforeEach(() => {
    MockDate.set('2022-03-12T12:00');
    fetchMock.reset();
    fetchMock.get(url, getCovidDataMock());
    tree = render(
      <Provider store={storeForTest}>
        <App />
      </Provider>,
    );
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('testing homepage, details page, navigation between both, and snapshot', async () => {
    // homepage
    const countries = await tree.findAllByTestId('country');
    expect(countries).toHaveLength(6);
    const inputCountry = await tree.findByRole('textbox');
    fireEvent.change(inputCountry, { target: { value: 'Argentina' } });
    const country = await tree.findByTestId('country');
    expect(await within(country).findByText('Argentina')).toBeTruthy();
    expect(await tree.queryByTestId('btnBack')).toBeFalsy();

    // navigation to details page
    fireEvent.click(country);

    // details page
    const regions = await tree.findAllByTestId('region');
    expect(regions).toHaveLength(33);
    const inputRegion = await tree.findByRole('textbox');
    fireEvent.change(inputRegion, { target: { value: 'Mendoza' } });
    const region = await tree.findByTestId('region');
    expect(await within(region).findByText('Mendoza')).toBeTruthy();
    expect(await tree.queryByTestId('btnBack')).toBeTruthy();

    // navigation to homepage
    const btnBack = await tree.findByTestId('btnBack');
    fireEvent.click(btnBack);
    expect(tree.queryAllByTestId('country')).toBeTruthy();

    // snapshot
    expect(tree).toMatchSnapshot();
  });
});
*/
