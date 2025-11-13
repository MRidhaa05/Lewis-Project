import React from 'react'
import { cn } from '@/lib/cn'

const ProductCard = ({ product, onAddToCart, formatPrice }) => {
  return (
    <div
      className={cn(
        'border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full',
        !product.inStock && 'opacity-60 grayscale'
      )}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain mb-6 rounded-lg bg-gray-50"
          loading="lazy"
        />
      )}
      <h2 className="text-xl font-bold mb-3 line-clamp-2 flex-grow">{product.name}</h2>
      <p className="text-3xl font-semibold text-blue-600 mb-8">
        {formatPrice(product.price)}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
        className={cn(
          'py-3 rounded-lg text-white font-semibold transition w-full mt-auto',
          product.inStock
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        )}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  )
}

export default function ProductsPage({ products, onAddToCart, formatPrice, loading, error }) {
  if (loading) return <p className="text-center text-2xl text-gray-600">Loading products...</p>
  if (error) return <p className="text-center text-2xl text-red-600">{error}</p>

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6')}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  )
}
