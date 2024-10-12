import React from 'react';
import { Product } from '../../types/Product';
import { FaHeart, FaStar } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleLike } from '../../features/wishlist/wishlistSlice';
import { toast } from 'react-toastify';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id)
  );

  const handleLike = () => {
    dispatch(toggleLike(product));
    if (!isLiked) {
      toast.success(`${product.title} Added to liked.`);
    } else {
      toast.info(`${product.title} removed from liked.`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <span className="text-sm text-gray-500">{product.category}</span>
        <p className="text-xl font-bold text-gray-800 mt-2">${product.price}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 flex items-center">
            <FaStar className="mr-1" /> {product.rating}
          </span>
          <span className="text-gray-600">In Stock: {product.stock}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
      </div>
      <button
        onClick={handleLike}
        className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
          isLiked ? 'bg-white' : ' bg-black border border-white'
        } hover:bg-red-600`}
      >
        <FaHeart color={isLiked ? 'red' : 'white'} />
      </button>
    </div>
  );
};

export default ProductCard;