import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

const Region = ({ name, info }) => {
  const {
    today_confirmed: confirmedTotal,
    today_deaths: deathsTotal,
    today_recovered: recoveredTotal,
  } = info;

  return (
    <Card className="rounded-0 h-100 bg-region" data-testid="region">
      <Card.Body className="d-flex flex-column justify-content-center">
        <Row xs={2}>
          <Card.Title className="mb-0 d-flex flex-column justify-content-center">{name}</Card.Title>
          <Col>
            <Row xs={1}>
              <Col>
                Confirmed:
                {' '}
                {confirmedTotal}
              </Col>
              <Col>
                Deaths:
                {' '}
                {deathsTotal}
              </Col>
              <Col>
                Recovered:
                {' '}
                {recoveredTotal}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

Region.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.shape({
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
    today_recovered: PropTypes.number,
  }).isRequired,
};

export default Region;
