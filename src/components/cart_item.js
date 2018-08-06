import React from 'react';

export default ({ product: { title, price, image: { imageUrl } }}) => {
  return (
    <div>
      <p>Название: { title }</p>
      <p>Цена: { price }</p>
      <p><img style={{ maxWidth: '100px' }} src={ imageUrl } /></p>
    </div>
  );
};