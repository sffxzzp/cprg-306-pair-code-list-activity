import React from 'react';
import CardItem from './CardItem';
import { products } from './data';

const CardLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <CardItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardLayout;
