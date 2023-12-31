import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { getProducts } from '../../services/productService';
import './misProductos.scss';

const MisProductos = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterResponse, setFilterResponse] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response);
      setFilteredProducts(response);
      const categoriesList = getCategories(response);
      setCategories(categoriesList);
      const ratingList = getRatings(response);
      setRating(ratingList);
      setFilters({ ...filters });
    });
  }, []);

  const getCategories = data => {
    const categoryList = data.map(item => item.category);
    return [...new Set(categoryList)];
  };

  const getRatings = data => {
    const ratingList = data.map(item => item.rating);
    const ratingWithoutDuplicates = [...new Set(ratingList)];
    return ratingWithoutDuplicates.sort((a, b) => a - b);
  };

  const handleFilter = (event, products) => {
    const { name, value } = event.target;
    const filterParams = {
      ...filters,
      [name]: value,
    };

    let productsFiltered = [...products];

    for (const key in filterParams) {
      if (filterParams[key]) {
        productsFiltered = productsFiltered.filter(
          product => product[key] == filterParams[key]
        );
      }
    }

    setFilters(filterParams);
    setFilterResponse(() =>
      productsFiltered.length > 0 ? '' : 'There are no results'
    );
    setFilteredProducts(productsFiltered);
  };

  return (
    <>
      <section className='mainFilterContainer'>
        <div className='categoryFilter'>
          <label>Category</label>
          <select
            name='category'
            value={filters.category}
            onChange={event => handleFilter(event, products)}
          >
            <option value={''}>All</option>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className='ratingFilter'>
          <label>Rating</label>
          <select
            name='rating'
            value={filters.rating}
            onChange={event => handleFilter(event, products)}
          >
            <option value={''}>All</option>
            {rating.length > 0 ? (
              rating.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
      </section>

      <section className='mainCardContainer'>
        {filteredProducts.length ? (
          filteredProducts.map((product, index) => (
            <Card key={index} product={product} navigate={navigate} />
          ))
        ) : filterResponse.length ? (
          <h2>{filterResponse}</h2>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default MisProductos;
