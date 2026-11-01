
import React from "react";

function Navbar({ category, setCategory, setSubCategory }) {
  const categories = ["All", "Men", "Women", "Slides", "New Arrivals"];

  const subCategories = {
    Men: ["Sneakers", "Casual Shoes", "Sports Shoes", "Formal Shoes", "Loafers"],
    Women: ["Heels", "Sneakers", "Flats", "Sandals", "Boots"]
  };

  const selectSubCategory = (mainCategory, subCategory) => {
    setCategory(mainCategory);
    setSubCategory(subCategory);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">

        {categories.map((item) => (
          <div
            key={item}
            className={`nav-item ${
              category === item ? "nav-active" : ""
            }`}
          >
            <button onClick={() => setCategory(item)}>
              {item}
              {subCategories[item] && (
                <span className="dropdown-arrow">⌄</span>
              )}
            </button>

            {subCategories[item] && (
              <div className="dropdown-menu">
                <button
                  onClick={() => selectSubCategory(item, "All")}
                >
                  All {item}
                </button>

                {subCategories[item].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => selectSubCategory(item, sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>

      <span className="nav-message">FIND YOUR PERFECT FIT</span>
    </nav>
  );
}

export default Navbar;
