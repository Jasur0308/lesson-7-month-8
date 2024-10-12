// src/components/Header/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const Header: React.FC = () => {
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const location = useLocation();

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between">
      <h1 className="text-2xl font-bold">Shopping Store</h1>
      <nav className="mt-2 flex justify-between">
        <Link
          to="/"
          className={`text-lg mx-4 hover:text-gray-300 ${location.pathname === '/' ? 'underline' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/like"
          className={`flex items-center text-lg mx-4 hover:text-gray-300 ${location.pathname === '/like' ? 'underline' : ''}`}
        >
          Liked Products
          {wishlistCount > 0 && <span>({wishlistCount})</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;