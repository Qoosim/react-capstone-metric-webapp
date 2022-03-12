import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Country from '../components/Country';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Country
          key="france"
          name="France"
          confirmedTotal={500}
          deathsTotal={120}
          recoveredTotal={200}
        />
      </BrowserRouter>
    </Provider>,
  );
});
afterEach(cleanup);
describe('country component testing', () => {
  test('France country displaying in the browser', () => {
    screen.getByText('France');
    expect(screen.getByText('Confirmed: 500')).toBeInTheDocument();
  });
});
