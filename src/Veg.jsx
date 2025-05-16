import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './store';
import './vegStyle.css';

function Veg() {
  const dispatch = useDispatch();

  // Get veg products from Redux store
  const vegProducts = useSelector(globalState => globalState.product.Veg);

  // State for selected price ranges
  const [selectedRange, setSelectedRange] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Define price ranges
  const priceRanges = [
    { value: 'Rs 1 to Rs 50', min: 0, max: 50 },
    { value: 'Rs 50 to Rs 100', min: 50, max: 100 },
    { value: 'Rs 100 to Rs 200', min: 100, max: 200 },
    { value: 'Rs 200 to Rs 500', min: 200, max: 500 },
    { value: 'Rs 500 And Above', min: 500, max: Infinity },
  ];

  // Handle checkbox changes for filters
  const handleCheckboxChange = (rangeValue) => {
    if (selectedRange.includes(rangeValue)) {
      const updated = selectedRange.filter(r => r !== rangeValue);
      setSelectedRange(updated);
    } else {
      const updated = [...selectedRange, rangeValue];
      setSelectedRange(updated);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Determine active ranges and filtered products
  const activeRanges = priceRanges.filter(range => selectedRange.includes(range.value));
  const filteredProducts = selectedRange.length === 0
    ? vegProducts
    : vegProducts.filter(product =>
        activeRanges.some(range =>
          product.price >= range.min && product.price <= range.max
        )
      );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Map currentItems to JSX
  const vegListItems = currentItems.map((product, index) => (
    <div className='veg-Cart' key={index}>
      <img src={product.image} alt={product.name} className='veg-Image' />
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>
      <button onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
    </div>
  ));

  return (
    <>
      <div className="veg-wrapper">
        {/* Filter sidebar */}
        <div className="veg-container">
          <h2>Filter by Price</h2>
          {priceRanges.map(range => (
            <label key={range.value}>
              <input
                type="checkbox"
                checked={selectedRange.includes(range.value)}
                onChange={() => handleCheckboxChange(range.value)}
              />
              {range.value}
            </label>
          ))}
          <button onClick={() => setSelectedRange([])}>Clear All Filters</button>
        </div>

        {/* Product grid */}
        <div className="veg-products">
          <h1 style={{ textAlign: 'center', color: '#2e7d32' }}>Veg Items</h1>
          <ol>
            {vegListItems}
          </ol>

          {/* Pagination Controls */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  margin: '0 4px',
                  fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
                  backgroundColor: currentPage === i + 1 ? '#2e7d32' : '',
                  color: currentPage === i + 1 ? '#fff' : '',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  border: '1px solid #ccc'
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Veg;