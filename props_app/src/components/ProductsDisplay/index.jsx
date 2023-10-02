import React from 'react';

const ProductsDisplay = ({ products, setProducts }) => {
  const handleProductClick = (id) => {
 
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: true };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;