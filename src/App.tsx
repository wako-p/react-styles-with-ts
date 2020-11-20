import React from 'react';

import { Product } from './product';
import { FilterableProductTable } from './filterable-product-table';
import './App.css';

const products: Product[] = [
  { category: "AAA", name: "A-1", price: "100", stocked:  true, },
  { category: "AAA", name: "A-2", price: "100", stocked:  true, },
  { category: "AAA", name: "A-3", price: "100", stocked: false, },
  { category: "BBB", name: "B-1", price: "200", stocked:  true, },
  { category: "BBB", name: "B-2", price: "200", stocked: false, },
];

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
