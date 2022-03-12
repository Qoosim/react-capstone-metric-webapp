import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeForTest from '../redux/storeForTest';
import Home from '../components/Home';

describe('The Profile component', () => {
  test('renders the Profile component', () => {
    const { getByText } = render(
      <Provider store={storeForTest}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Total confirmed: 0')).toBeInTheDocument();
  });
});
