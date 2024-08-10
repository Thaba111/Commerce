import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-500 ${isInCart(product.id) ? 'scale-105 shadow-2xl' : 'hover:scale-110 hover:shadow-2xl'}`}
              onClick={() => handleAddToCart(product)}
            >
              <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-gray-600">KES {product.price.toLocaleString()}</p>
                <button className={`mt-4 inline-block py-2 px-4 rounded ${isInCart(product.id) ? 'bg-gray-600 text-white' : 'bg-blue-600 text-white'}`}>
                  {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
