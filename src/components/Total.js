import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const Total = ({
  confirmedTotal, deathsTotal,
  recoveredTotal, confirmedToday,
  deathsToday, recoveredToday,
}) => (
  <Row xs={1} className="mx-0 gy-1 mb-2">
    <Col>
      Total confirmed:
      {' '}
      {confirmedTotal}
    </Col>
    <Col className="bg-custom3">
      Total deaths:
      {' '}
      {deathsTotal}
    </Col>
    <Col>
      Total recovered:
      {' '}
      {recoveredTotal}
    </Col>
    <Col className="bg-custom3">
      Today&apos;s new confirmed:
      {' '}
      {confirmedToday}
    </Col>
    <Col>
      Today&apos;s new deaths:
      {' '}
      {deathsToday}
    </Col>
    <Col className="bg-custom3">
      Today&apos;s new recovered:
      {' '}
      {recoveredToday}
    </Col>
  </Row>
);

Total.propTypes = {
  confirmedTotal: PropTypes.number.isRequired,
  deathsTotal: PropTypes.number.isRequired,
  recoveredTotal: PropTypes.number.isRequired,
  confirmedToday: PropTypes.number.isRequired,
  deathsToday: PropTypes.number.isRequired,
  recoveredToday: PropTypes.number.isRequired,
};

export default Total;
