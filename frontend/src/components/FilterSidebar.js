import React, { useState } from "react";
import "./styles/FilterSidebar.css";

const FilterSidebar = ({ categories = [], onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("newest");
  const [inStock, setInStock] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilter({
      category,
      priceRange,
      sortBy,
      inStock,
    });
  };

  const handlePriceChange = (e) => {
    const newPrice = [0, parseInt(e.target.value)];
    setPriceRange(newPrice);
    onFilter({
      selectedCategory,
      priceRange: newPrice,
      sortBy,
      inStock,
    });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onFilter({
      selectedCategory,
      priceRange,
      sortBy: e.target.value,
      inStock,
    });
  };

  const handleStockChange = (e) => {
    setInStock(e.target.checked);
    onFilter({
      selectedCategory,
      priceRange,
      sortBy,
      inStock: e.target.checked,
    });
  };

  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">FILTERS</h3>

      {/* Category Filter */}
      <div className="filter-section">
        <h4 className="filter-subtitle">Category</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={() => handleCategoryChange("")}
            />
            <span>All Products</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="filter-option">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={selectedCategory === cat.id}
                onChange={() => handleCategoryChange(cat.id)}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <h4 className="filter-subtitle">Price Range</h4>
        <div className="price-filter">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <div className="price-display">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="filter-section">
        <h4 className="filter-subtitle">Sort By</h4>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Stock Filter */}
      <div className="filter-section">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={inStock}
            onChange={handleStockChange}
          />
          <span>In Stock Only</span>
        </label>
      </div>

      {/* Reset Button */}
      <button
        className="reset-filter-btn"
        onClick={() => {
          setSelectedCategory("");
          setPriceRange([0, 1000]);
          setSortBy("newest");
          setInStock(false);
          onFilter({
            category: "",
            priceRange: [0, 1000],
            sortBy: "newest",
            inStock: false,
          });
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
