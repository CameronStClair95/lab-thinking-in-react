import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
       {props.products.map((product) => {
        return(
                <ProductRow key={product.id} products={product} ></ProductRow>
        )
       })}
    </table>
  );
}

export default ProductTable;
