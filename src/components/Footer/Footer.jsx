import React from 'react'
import './footer.css';
//import logo from '../../assets/images/eco-logo.png';
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div className="logo">
              <div>
                <h1 className='text-white'>Magzmart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo vero pariatur molestiae asperiores voluptates cupiditate?
              Autem ratione hic nam! Placeat.
            </p>
          </Col>
          <Col lg="3" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Sports</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>tech</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Fashion</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Business</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>

                <ListGroupItem className="ps-0 border-0">
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Mahendru patna 800002 Bihar</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-fill"></i></span>
                  <p>+917070212143</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>abs@123</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12' className="mb-4">
            <p className="footer__copyright">Copyright {year}  developed
              by ritesh kumar.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )

};

export default Footer;