import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/ProductCard/ProductCard';

const LikePage: React.FC = () => {
  const likedProducts = useAppSelector((state) => state.wishlist.items);

  if (likedProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        You have no liked products.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {likedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LikePage;