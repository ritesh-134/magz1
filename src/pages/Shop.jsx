import React, { useState } from 'react'
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductList'
const Shop = () => {
  const [productsData, setProductsData] = useState(products)
  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === 'tech') {
      const filteredProducts = products.filter(item => item.category === 'tech');
      setProductsData(filteredProducts);
    }
    if (filterValue === 'sports') {
      const filteredProducts = products.filter(item => item.category === 'sports');
      setProductsData(filteredProducts);
    }
    if (filterValue === 'fashion') {
      const filteredProducts = products.filter(item => item.category === 'fashion');
      setProductsData(filteredProducts);
    }
    if (filterValue === 'business') {
      const filteredProducts = products.filter(item => item.category === 'business');
      setProductsData(filteredProducts);
    }
    if (filterValue === 'education') {
      const filteredProducts = products.filter(item => item.category === 'education');
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

    setProductsData(searchedProducts);
  };



  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option> Filter by category</option>
                  <option value="tech">tech</option>
                  <option value="sports">Sports</option>
                  <option value="fashion">Fashion</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder="Search......" onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {
              productsData.length === 0 ? (<h1 className="text-center fs-4">No product are found!</h1>)
                : (<ProductsList data={productsData} />)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;