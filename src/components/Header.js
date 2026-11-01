
import React from "react";

function Header({ cartCount, openCart, openAccount, search, setSearch }) {
  return (
    <header className="header">

      <a href="/" className="brand-logo">
        <span className="logo-icon">
          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M9 39C17 38 23 34 27 23L34 27C38 32 43 34 51 35C56 36 59 40 57 45C55 50 47 53 35 53H14C7 53 5 45 9 39Z"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 26L33 32M21 32L29 37M15 38L24 42"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span>
          Sole<span className="logo-highlight">Mate</span>
          <small>STEP INTO STYLE</small>
        </span>
      </a>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search your favourite shoes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-actions">
        <button onClick={openAccount}>♙ Account</button>
        <button onClick={openCart}>Bag ({cartCount})</button>
      </div>

    </header>
  );
}

export default Header;
