import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdMic, MdOutlineSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, btnBack }) => {
  const navigate = useNavigate();

  return (
    <header className="py-2 bg-custom2 text-white fixed-top">
      <Container fluid="md">
        <Row className="mx-0 g-0 justify-content-center align-items-center">
          {btnBack && (
            <Col xs={1} data-testid="backBtn">
              <MdKeyboardArrowLeft className="fs-1" onClick={() => navigate('/')} />
            </Col>
          )}
          <Col xs={btnBack ? 9 : 10} md={btnBack ? 11 : 12}>
            <h1 className="mb-0 text-center">{title}</h1>
          </Col>
          <Col xs={1} className="px-1 d-md-none">
            <MdMic className="fs-1" />
          </Col>
          <Col xs={1} className="px-1 d-md-none">
            <MdOutlineSettings className="fs-1" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnBack: PropTypes.bool,
};

Header.defaultProps = {
  btnBack: false,
};

export default Header;
