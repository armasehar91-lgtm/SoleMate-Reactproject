
import React from "react";

function FilterSidebar({
  category,
  setCategory,
  subCategory,
  setSubCategory,
  size,
  setSize,
  maxPrice,
  setMaxPrice,
  sort,
  setSort
}) {
  const categories = [
    "All",
    "Men",
    "Women",
    "Slides",
    "New Arrivals"
  ];

  const subCategories = {
    Men: [
      "Sneakers",
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Loafers"
    ],
    Women: [
      "Heels",
      "Sneakers",
      "Flats",
      "Sandals",
      "Boots"
    ]
  };

  const sizes = [
    "All", "36", "37", "38", "39",
    "40", "41", "42", "43", "44"
  ];

  return (
    <aside className="filter-sidebar">

      <div className="filter-title">
        <h3>Filters</h3>
        <span>REFINE YOUR STYLE</span>
      </div>

      <div className="filter-group">
        <h4>Categories</h4>

        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "filter-active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
            {category === item && <span>✓</span>}
          </button>
        ))}
      </div>

      {subCategories[category] && (
        <div className="filter-group">
          <h4>{category} Shoe Types</h4>

          <button
            className={subCategory === "All" ? "filter-active" : ""}
            onClick={() => setSubCategory("All")}
          >
            All {category}
            {subCategory === "All" && <span>✓</span>}
          </button>

          {subCategories[category].map((item) => (
            <button
              key={item}
              className={subCategory === item ? "filter-active" : ""}
              onClick={() => setSubCategory(item)}
            >
              {item}
              {subCategory === item && <span>✓</span>}
            </button>
          ))}
        </div>
      )}

      <div className="filter-group">
        <h4>Available Sizes</h4>

        <div className="size-options">
          {sizes.map((item) => (
            <button
              key={item}
              className={size === item ? "size-active" : ""}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Maximum Price</h4>

        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <p className="price-value">
          Up to Rs. {maxPrice.toLocaleString("en-PK")}
        </p>
      </div>

      <div className="filter-group">
        <h4>Sort Products</h4>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

    </aside>
  );
}

export default FilterSidebar;
