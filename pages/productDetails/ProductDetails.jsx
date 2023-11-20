import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/productService';
import './productDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id).then(response => {
      setProduct(response);
      console.log(response);
    });
  }, []);

  return (
    <section className='detailsContainer'>
      <h1>Product Details</h1>
      <h3>
        <span className='red'>Name: </span>
        {product.name}
      </h3>
      <p>
        <span className='red'>Category: </span>
        {product.category}
      </p>
      <p>
        <span className='red'>Rating: </span>
        {product.rating}
      </p>
      <p className='red'>Description:</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit odio
        non amet quas dignissimos ullam laboriosam porro autem vel quod, optio
        fugit aspernatur aut nemo dolorem accusamus, at ipsa voluptatibus?
      </p>
    </section>
  );
};

export default ProductDetails;
