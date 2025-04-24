import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";

import ClassicWhiteT from "../assets/images_folder/WhiteShirt.webp";
import BlueJean from "../assets/images_folder/BlueJean.webp";
import FloralDress from "../assets/images_folder/SummarFLoral.webp";
import OversizedHoodie from "../assets/images_folder/Giant_hoodie.webp";
import KidsTee from "../assets/images_folder/KidsTee.webp";
import Wool from "../assets/images_folder/Wool.webp";
import DenimJacket from "../assets/images_folder/denim.jpg";
import KidsCoat from "../assets/images_folder/KidsCoat.webp";



// Mock product data
const initialProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "Men",
    price: 24.99,
    image: ClassicWhiteT,
    description: "Comfortable cotton t-shirt for everyday wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    inStock: true
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Men",
    price: 59.99,
    image: BlueJean,
    description: "Stylish slim fit jeans for a modern look",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    category: "Women",
    price: 49.99,
    image: FloralDress,
    description: "Light and breezy dress perfect for summer days",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral", "Blue", "Pink"],
    inStock: true
  },
  {
    id: 4,
    name: "Oversized Hoodie",
    category: "Women",
    price: 39.99,
    image: OversizedHoodie,
    description: "Cozy oversized hoodie for relaxed style",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black", "Pink"],
    inStock: true
  },
  {
    id: 5,
    name: "Kids Graphic Tee",
    category: "Kids",
    price: 19.99,
    image: KidsTee,
    description: "Fun graphic t-shirt for children",
    sizes: ["4T", "5T", "6T", "7T"],
    colors: ["Blue", "Red", "Yellow"],
    inStock: true
  },
  {
    id: 6,
    name: "Wool Cardigan",
    category: "Women",
    price: 89.99,
    image: Wool,
    description: "Warm wool cardigan for cold weather",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Gray", "Black"],
    inStock: true
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Men",
    price: 79.99,
    image: DenimJacket,
    description: "Classic denim jacket for all seasons",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    inStock: true
  },
  {
    id: 8,
    name: "Kids Winter Coat",
    category: "Kids",
    price: 69.99,
    image: KidsCoat,
    description: "Warm winter coat for children",
    sizes: ["4T", "5T", "6T", "7T"],
    colors: ["Red", "Blue", "Green"],
    inStock: true
  }
];

// Main Shop All Page Component
const ShopAll = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    sortBy: "default"
  });
  const [showCart, setShowCart] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product is already in cart
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (itemIndex >= 0) {
        // Product exists in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1
        };
        return updatedCart;
      } else {
        // Product not in cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity in cart
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== "All") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max) {
        if (product.price < min || product.price > max) return false;
      } else {
        if (product.price < min) return false;
      }
    }

    return true;
  }).sort((a, b) => {
    // Sort products
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="shop-container">

      {/* Navigation Bar */}
      <Navbar />
      <GlobalStyles />
      

      {/* Page Title */}
      <div className="page-header">
        <h1>All Clothing</h1>
        <p>Browse our collection of high-quality, comfortable clothing</p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            name="category" 
            value={filters.category} 
            onChange={handleFilterChange}
          >
            <option value="All">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range:</label>
          <select 
            name="priceRange" 
            value={filters.priceRange} 
            onChange={handleFilterChange}
          >
            <option value="All">All Prices</option>
            <option value="0-25">Under $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100">Over $100</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By:</label>
          <select 
            name="sortBy" 
            value={filters.sortBy} 
            onChange={handleFilterChange}
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-meta">
                <div className="sizes">
                  <span>Sizes: </span>
                  {product.sizes.join(", ")}
                </div>
                <div className="colors">
                  <span>Colors: </span>
                  {product.colors.join(", ")}
                </div>
              </div>
              <button 
                className="add-to-cart" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <><div className="cart-sidebar">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-button">
                  Proceed to Checkout
                </button>
                <button
                  className="continue-shopping"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}

        </div><><Footer /></></> 
      )}
      
      {/* CSS Styles */}
      <style jsx>{`
        .shop-container {
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          position: relative;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #8B4513;
          color: white;
          margin-bottom: 20px;
        }
        
        .logo {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }
        
        .nav-link:hover {
          opacity: 0.8;
        }
        
        .cart-button {
          background: none;
          border: 1px solid white;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .cart-button:hover {
          background-color: white;
          color: #8B4513;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .page-header h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }
        
        .page-header p {
          color: #666;
        }
        
        .filter-section {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .filter-group label {
          font-size: 14px;
          font-weight: 500;
        }
        
        .filter-group select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .product-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .product-image {
          height: 300px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .product-info {
          padding: 15px;
        }
        
        .product-info h3 {
          margin: 0 0 5px;
          font-size: 18px;
        }
        
        .product-category {
          color: #666;
          font-size: 14px;
          margin: 0 0 10px;
        }
        
        .product-price {
          font-weight: bold;
          font-size: 18px;
          margin: 0 0 10px;
          color: #8B4513;
        }
        
        .product-description {
          font-size: 14px;
          color: #555;
          margin: 0 0 15px;
        }
        
        .product-meta {
          font-size: 13px;
          color: #777;
          margin-bottom: 15px;
        }
        
        .sizes, .colors {
          margin-bottom: 5px;
        }
        
        .sizes span, .colors span {
          font-weight: 500;
        }
        
        .add-to-cart {
          width: 100%;
          padding: 10px;
          background-color: #8B4513;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
          transition: background-color 0.3s;
        }
        
        .add-to-cart:hover {
          background-color: #724214;
        }
        
        .cart-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 350px;
          height: 100vh;
          background-color: white;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          flex-direction: column;
        }
        
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }
        
        .cart-header h2 {
          margin: 0;
          font-size: 22px;
        }
        
        .close-cart {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #555;
        }
        
        .empty-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          padding: 20px;
        }
        
        .empty-cart p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }
        
        .cart-items {
          flex-grow: 1;
          overflow-y: auto;
          padding: 10px 20px;
        }
        
        .cart-item {
          display: flex;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
          position: relative;
        }
        
        .item-image {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
        
        .item-details {
          flex-grow: 1;
        }
        
        .item-details h4 {
          margin: 0 0 5px;
          font-size: 16px;
        }
        
        .item-price {
          color: #8B4513;
          font-weight: bold;
          margin: 0 0 10px;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .quantity-controls button {
          width: 25px;
          height: 25px;
          border: 1px solid #ddd;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .remove-item {
          position: absolute;
          top: 15px;
          right: 0;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #999;
        }
        
        .cart-summary {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        
        .checkout-button {
          width: 100%;
          padding: 12px;
          background-color: #8B4513;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          transition: background-color 0.3s;
        }
        
        .checkout-button:hover {
          background-color: #724214;
        }
        
        .continue-shopping {
          width: 100%;
          padding: 12px;
          background-color: white;
          color: #8B4513;
          border: 1px solid #8B4513;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .continue-shopping:hover {
          background-color: #8B4513;
          color: white;
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 10px;
          }
          
          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }
          
          .filter-section {
            flex-direction: column;
            align-items: center;
          }
          
          .cart-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ShopAll;