import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from '../components/ProductCard/ProductCard';

const HomePage: React.FC = () => {
  const { items: products, status, error } = useAppSelector((state) => state.products);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;