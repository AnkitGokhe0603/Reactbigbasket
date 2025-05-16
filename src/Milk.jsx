import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './milkStyle.css';
import { AddToCart } from './store';

function Milk() {
  const dispatch = useDispatch();

  // Fetch milk products from the Redux store
  const milkProducts = useSelector(state => state.product.Milk);

  // Define price ranges for filtering
  const priceRanges = [
    { value: 'Rs 1 to Rs 50', min: 0, max: 50 },
    { value: 'Rs 50 to Rs 100', min: 50, max: 100 },
    { value: 'Rs 100 to Rs 200', min: 100, max: 200 },
    { value: 'Rs 200 to Rs 500', min: 200, max: 500 },
    { value: 'Rs 500 and Above', min: 500, max: Infinity }
  ];

  // State: selected filter ranges
  const [selectedRanges, setSelectedRanges] = useState([]);

  // State: pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle checkbox toggle
  const handleCheckboxChange = (value) => {
    if (selectedRanges.includes(value)) {
      setSelectedRanges(selectedRanges.filter(item => item !== value));
    } else {
      setSelectedRanges([...selectedRanges, value]);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter milk products by selected price range
  const activeRanges = priceRanges.filter(range => selectedRanges.includes(range.value));
  const filteredMilkProducts = selectedRanges.length === 0
    ? milkProducts
    : milkProducts.filter(product =>
        activeRanges.some(range => product.price >= range.min && product.price <= range.max)
      );

  // Pagination logic
  const totalPages = Math.ceil(filteredMilkProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMilk = filteredMilkProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="milk-wrapper">
      {/* === Filter Section === */}
      <div className="milk-container">
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
      <div className="milk-products">
        <h1 className="milk-title">Milk Products</h1>
        <ol>
          {paginatedMilk.map((product, index) => (
            <div className='milk-Cart' key={index}>
              <img src={product.image} alt={product.name} className='milk-Image' />
              <h3>{product.name}</h3>
              <p>Rs {product.price}</p>
              <button onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
            </div>
          ))}
        </ol>

        {/* === Pagination Controls === */}
        <div className="pagination-controls">
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

export default Milk;