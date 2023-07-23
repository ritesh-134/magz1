import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products';
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.jpg";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
import counterImg from '../assets/images/counter-timer-img.png';
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [sportsProducts, setSportsProducts] = useState([]);
  const [educationProducts, setEducationProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);



  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category
      === "fashion");
    const filteredBestSalesProducts = products.filter((item) => item.category
      === "tech");
    const filteredSportsProducts = products.filter((item) => item.category
      === "sports");
    const filteredEducationProducts = products.filter((item) => item.category
      === "education");
    const filteredPopularProducts = products.filter((item) => item.category
      === "business");





    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setSportsProducts(filteredSportsProducts);
    setEducationProducts(filteredEducationProducts);
    setPopularProducts(filteredPopularProducts);



  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6" >
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Buy and read best magazoine from here </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Perspiciatis impedit, velit maxime molestias quae
                  eligendi corporis vitae. Adipisci, cum accusamus.</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Magazine</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn"><Link to='/shop'>visit store</Link></motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>

          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={sportsProducts} />
            <ProductList data={educationProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;