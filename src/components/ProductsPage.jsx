// src/components/ProductsPage.js
import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  function handleSearch(userInput) {

    if(!userInput){
        setProducts(jsonData)
    }
    else {
        const filteredProducts = jsonData.filter((individualProduct) => {
            return individualProduct.name.toLowerCase().includes(userInput.toLowerCase())

        })
        setProducts(filteredProducts)
    }
    

  }
  
  return(
      <div>

        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <ProductTable products={products}></ProductTable>
      </div>    
  )
}

export default ProductsPage;