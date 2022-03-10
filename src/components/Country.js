import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, info }) => {
  const {
    today_confirmed: confirmedTotal,
    today_deaths: deathsTotal,
    today_recovered: recoveredTotal,
  } = info;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>
          Confirmed:
          {' '}
          {confirmedTotal}
        </p>
        <p>
          Deaths:
          {' '}
          {deathsTotal}
        </p>
        <p>
          Recovered:
          {' '}
          {recoveredTotal}
        </p>
      </div>
    </>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    today_confirmed: PropTypes.string,
    today_deaths: PropTypes.string,
    today_recovered: PropTypes.string,
    new_confirmed: PropTypes.string,
    new_deaths: PropTypes.string,
    today_new_cases: PropTypes.string,
    today_new_recovered: PropTypes.string,
    today_open_cases: PropTypes.string,
    yesterday_confirmed: PropTypes.string,
    yesterday_deaths: PropTypes.string,
    yesterday_open_cases: PropTypes.string,
    yesterday_recovered: PropTypes.string,
  }).isRequired,
};

export default Country;
