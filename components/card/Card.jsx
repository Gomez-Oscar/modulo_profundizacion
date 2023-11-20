import React from 'react';

const Card = ({ product, navigate }) => {
  return (
    <div className='cardContainer' onClick={() => navigate(`${product.id}`)}>
      <h3>{product.name}</h3>
      <span className='category'>{product.category}</span>
      <span className='rating'>Rating: {product.rating}</span>
    </div>
  );
};

export default Card;
