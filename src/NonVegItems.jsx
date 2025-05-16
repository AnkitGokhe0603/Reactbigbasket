import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './nonVegStyle.css';
import { AddToCart } from './store';

function NonVegItems() {
  const dispatch = useDispatch();
  const nonVegProducts = useSelector(state => state.product.NonVeg);

  // Price range filter
  const priceRanges = [
    { value: 'Rs 1 to Rs 50', min: 0, max: 50 },
    { value: 'Rs 50 to Rs 100', min: 50, max: 100 },
    { value: 'Rs 100 to Rs 200', min: 100, max: 200 },
    { value: 'Rs 200 to Rs 500', min: 200, max: 500 },
    { value: 'Rs 500 and Above', min: 500, max: Infinity }
  ];

  const [selectedRanges, setSelectedRanges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCheckboxChange = (value) => {
    if (selectedRanges.includes(value)) {
      setSelectedRanges(selectedRanges.filter(item => item !== value));
    } else {
      setSelectedRanges([...selectedRanges, value]);
    }
    setCurrentPage(1);
  };

  const activeRanges = priceRanges.filter(range => selectedRanges.includes(range.value));
  const filteredNonVegProducts = selectedRanges.length === 0
    ? nonVegProducts
    : nonVegProducts.filter(product =>
        activeRanges.some(range => product.price >= range.min && product.price <= range.max)
      );

  const totalPages = Math.ceil(filteredNonVegProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredNonVegProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="nonveg-wrapper">
      {/* === Filter Section === */}
      <div className="nonveg-container">
        <h2>Filter by Price</h2>
        {priceRanges.map(range => (
          <label key={range.value}>
            <input
              type="checkbox"
              checked={selectedRanges.includes(range.value)}
              onChange={() => handleCheckboxChange(range.value)}
            />
            {range.value}
          </label>
        ))}
        <button onClick={() => setSelectedRanges([])}>Clear All Filters</button>
      </div>

      {/* === Product Display Section === */}
      <div className="nonveg-products">
        <h1 className="nonveg-title">Non-Veg Items</h1>
        <ol>
          {paginatedProducts.map((product, index) => (
            <div className='nonveg-Cart' key={index}>
              <img src={product.image} alt={product.name} className='nonveg-Image' />
              <h3>{product.name}</h3>
              <p>Rs {product.price}</p>
              <button onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
            </div>
          ))}
        </ol>

        {/* === Pagination Controls === */}
        <div className="nonVeg-pagination-controls">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ⬅ Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active-page' : ''}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default NonVegItems;