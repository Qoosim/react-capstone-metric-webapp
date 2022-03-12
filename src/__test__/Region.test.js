import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Region from '../components/Region';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Region
          key="mendoza"
          name="Mendoza"
          confirmedTotal={500}
          deathsTotal={3}
          recoveredTotal={250}
        />
      </BrowserRouter>
    </Provider>,
  );
});
afterEach(cleanup);
describe('region components testing', () => {
  test('Mendoza region displaying in the browser', () => {
    screen.getByText('Mendoza');
    expect(screen.getByText('Confirmed: 500')).toBeInTheDocument();
    expect(screen.getByText('Deaths: 3')).toBeInTheDocument();
    expect(screen.getByText('Recovered: 250')).toBeInTheDocument();
    expect(screen.getByText('Mendoza')).toBeInTheDocument();
  });
});
