import React from 'react'
import { cn } from '@/lib/cn'

export default function CartPage({ cart, onIncrease, onDecrease, onRemove, formatPrice }) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className={cn('bg-white rounded-xl shadow-lg p-6 m-6')}>
        <h2 className="text-3xl font-bold mb-6">Cart ({itemCount})</h2>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className={cn('bg-white rounded-xl shadow-lg p-6 m-6')}>
      <h2 className="text-3xl font-bold mb-6">Cart ({itemCount})</h2>
      <ul className="divide-y divide-gray-200 -my-6">
        {cart.map((item) => (
          <li key={item.id} className="py-6 flex flex-wrap gap-4 sm:gap-6 items-center">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded-lg bg-gray-50 flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold line-clamp-2">{item.name}</p>
              <p className="text-sm text-gray-600">{formatPrice(item.price)} each</p>
            </div>
            <div className="flex items-center gap-3 order-last sm:order-none">
              <button
                onClick={() => onDecrease(item.id)}
                className="w-9 h-9 rounded-full bg-red-500 text-white hover:bg-red-600 transition flex items-center justify-center"
              >
                –
              </button>
              <span className="text-lg font-medium w-12 text-center">{item.quantity}</span>
              <button
                onClick={() => onIncrease(item.id)}
                className="w-9 h-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition flex items-center justify-center"
              >
                +
              </button>
            </div>
            <p className="text-lg font-semibold">{formatPrice(item.price * item.quantity)}</p>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t mt-8 pt-6 text-right">
        <p className="text-2xl font-bold">Total: {formatPrice(total)}</p>
      </div>
    </div>
  )
}
