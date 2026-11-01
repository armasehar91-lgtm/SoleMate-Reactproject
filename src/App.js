
import React, { useState } from "react";
import products from "./data";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import QuickBuyModal from "./components/QuickBuyModal";
import CartDrawer from "./components/CartDrawer";
import AccountPanel from "./components/AccountPanel";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");

  const [search, setSearch] = useState("");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("default");

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickProduct, setQuickProduct] = useState(null);

  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // Change main category and reset its subcategory
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSubCategory("All");
  };

  // Filter products
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const subCategoryMatch =
      subCategory === "All" ||
      product.subCategory === subCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const sizeMatch =
      size === "All" || product.sizes.includes(size);

    const priceMatch = product.price <= maxPrice;

    return (
      categoryMatch &&
      subCategoryMatch &&
      searchMatch &&
      sizeMatch &&
      priceMatch
    );
  });

  // Sort products
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // Add product to cart
  const addToCart = (product, selectedSize) => {
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        size: selectedSize,
        cartId: Date.now(),
        quantity: 1
      }
    ]);

    setSelectedProduct(null);
    setQuickProduct(null);
    setShowCart(true);
  };

  // Remove product from cart
  const removeFromCart = (cartId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.cartId !== cartId)
    );
  };

  // Update product quantity
  const updateQuantity = (cartId, amount) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount)
            }
          : item
      )
    );
  };

  // Calculate cart items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Reset all filters
  const resetFilters = () => {
    setCategory("All");
    setSubCategory("All");
    setSize("All");
    setMaxPrice(10000);
    setSort("default");
    setSearch("");
  };

  return (
    <div className="app">

      <Header
        cartCount={cartCount}
        openCart={() => setShowCart(true)}
        openAccount={() => setShowAccount(true)}
        search={search}
        setSearch={setSearch}
      />

      <Navbar
  category={category}
  setCategory={handleCategoryChange}
  setSubCategory={setSubCategory}
/>

      <Hero />

      <section className="shop-section" id="shop">

        <FilterSidebar
          category={category}
          setCategory={handleCategoryChange}
          subCategory={subCategory}
          setSubCategory={setSubCategory}
          size={size}
          setSize={setSize}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={setSort}
        />

        <div className="products-section">

          <div className="section-heading">
            <div>
              <p className="eyebrow">MADE FOR EVERY STEP</p>

              <h2>
                {subCategory !== "All"
                  ? subCategory
                  : category === "All"
                  ? "Explore Our Collection"
                  : category}
              </h2>

              <p>{filteredProducts.length} products found</p>
            </div>

            <button
              className="reset-button"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={() => setSelectedProduct(product)}
                  onQuickBuy={() => setQuickProduct(product)}
                />
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try changing your filters or search.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          close={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      {quickProduct && (
        <QuickBuyModal
          product={quickProduct}
          close={() => setQuickProduct(null)}
          addToCart={addToCart}
        />
      )}

      {showCart && (
        <CartDrawer
          cart={cart}
          close={() => setShowCart(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          checkout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}

      {showAccount && (
        <AccountPanel close={() => setShowAccount(false)} />
      )}

      {showCheckout && (
        <Checkout
          cart={cart}
          close={() => setShowCheckout(false)}
          completeOrder={() => {
            alert("Thank you for shopping with SoleMate!");
            setCart([]);
            setShowCheckout(false);
          }}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;
