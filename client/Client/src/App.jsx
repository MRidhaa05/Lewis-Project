import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import Home from '@/pages/Home'
import ProductsPage from '@/pages/ProductsPage'
import CartPage from '@/pages/CartPage'
import '../src/styles/globals.css'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const rateResponse = await fetch('https://api.exchangerate.host/latest?base=USD')
        const rateData = await rateResponse.json()
        const rate = rateData.rates?.ZAR ?? 17.09

        const prodResponse = await fetch('https://fakestoreapi.com/products?limit=2')
        if (!prodResponse.ok) throw new Error('Failed to fetch products')
        const prods = await prodResponse.json()

        const mappedProducts = prods.map((p, index) => ({
          id: p.id,
          name: p.title,
          price: Math.round(p.price * rate),
          image: p.image,
          inStock: index !== 2 && index !== 6,
        }))

        setProducts(mappedProducts)
      } catch (err) {
        setError('Failed to load data. Please try again later.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const formatPrice = (amount) => {
    return `R${Number(amount).toLocaleString('en-ZA', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`
  }

  const addToCart = (product) => {
    if (!product.inStock) return
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    )
  }

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 🧱 Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductsPage
                  products={products}
                  onAddToCart={addToCart}
                  formatPrice={formatPrice}
                  loading={loading}
                  error={error}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                  formatPrice={formatPrice}
                />
              }
            />
          </Routes>
        </main>

        {/* ⬇️ Navigation Bar Below Gray Section */}
        <nav className="p-4 bg-gray-100 text-center border-t border-gray-300">
          <Link to="/" className="mx-3 text-red-500 font-medium hover:underline">
            Home
          </Link>
          <Link to="/products" className="mx-3 text-red-500 font-medium hover:underline">
            Products
          </Link>
          <Link to="/cart" className="mx-3 text-red-500 font-medium hover:underline">
            Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)})
          </Link>
        </nav>
      </div>
    </Router>
  )
}

export default App
