import { Navbar, Nav, Container, Button, NavDropdown, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './NavigationBar.css';

const NavigationBar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [expanded, setExpanded] = useState(false); 
  const navigate = useNavigate(); 

  const handleMouseEnter = () => setShowServicesDropdown(true);
  const handleMouseLeave = () => setShowServicesDropdown(false);

  const handleServicesClick = (e: any) => {
    if (e.target.classList.contains('dropdown-toggle')) {
      navigate('/services');
    }
  };

  const handleNavItemClick = () => {

    setExpanded(false);
  };

  return (
    <div className='navigation'>
<div className="top-header bg-dark text-white py-2">
      <Container>
        <Row className="g-3 d-flex">
          <Col xs={12} sm={6} md={3} className="d-flex align-items-center justify-content-center">
            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
            <span>Sydney, Australia</span>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex align-items-center justify-content-center">
            <i className="bi bi-telephone-fill me-2 text-warning"></i>
            <span>0468328227</span>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex align-items-center justify-content-center">
            <i className="bi bi-clock-fill me-2 text-warning"></i>
            <span>Mon - Fri: 9:00am - 5:00pm</span>
          </Col>
          <Col xs={12} sm={6} md={3} className="d-flex align-items-center justify-content-center">
            <i className="bi bi-calendar-event-fill me-2 text-warning"></i>
            <span>Weekends Appointments Only</span>
          </Col>
        </Row>
      </Container>
    </div>

      <Navbar color='white' expand="lg" className="main-navbar" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/alphaafin-website/public/assets/logo.png"
              alt="Alphaa Financial Solutions"
              className="logo me-2"
            />
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)} 
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/" onClick={handleNavItemClick}>
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" onClick={handleNavItemClick}>
                <Nav.Link>ABOUT US</Nav.Link>
              </LinkContainer>

              <NavDropdown
                title="SERVICES"
                id="services-dropdown"
                className="nav-link"
                show={showServicesDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleServicesClick}
              >
                <LinkContainer to="/services/home-loans" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Home Loan</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/first-home-buyer" onClick={handleNavItemClick}>
                  <NavDropdown.Item>First Home Buyer</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/refinancing" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Refinancing</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/commercial-loan" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Commercial Loan</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/asset-finance" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Asset Finance</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/personal-loan" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Personal Loan</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/self-managed-super-fund-smsf-lending" onClick={handleNavItemClick}>
                  <NavDropdown.Item>Self-Managed Super Fund (SMSF) Lending</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Button variant="dark" className="call-button ms-3" onClick={handleNavItemClick}>
                CALL US ANYTIME
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
