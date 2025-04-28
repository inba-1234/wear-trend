import React, { useState, useEffect } from "react";
import '../assets/styles.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";

import KidsTee from "../assets/images_folder/KidsTee.webp";
import KidsCoat from "../assets/images_folder/KidsCoat.webp";
import DinoPajamas from "../assets/images_folder/DinoPajamas.webp";
import SchoolPolo from "../assets/images_folder/SchoolPolo.webp";
import KidsRaincoat from "../assets/images_folder/KidsRaincoat.webp";
import KidsOveralls from "../assets/images_folder/KidsOveralls.webp";
import CartoonHoodie from "../assets/images_folder/CartoonHoodie.webp";
// Mock product data for Kids' clothing
const initialProducts = [
  {
    id: 23,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 32.99,
    image: CartoonHoodie,
    description: "Hoodie featuring favorite cartoon characters",
    sizes: ["3T", "4T", "5T", "6T", "7T"],
    colors: ["Blue", "Red", "Purple"],
    inStock: true
  },
  {
    id: 17,
    name: "Dinosaur Pajama Set",
    category: "Kids",
    price: 29.99,
    image: DinoPajamas,
    description: "Fun pajamas with dinosaur print",
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Green", "Blue", "Red"],
    inStock: true
  },
  {
    id: 18,
    name: "School Uniform Polo",
    category: "Kids",
    price: 22.99,
    image: SchoolPolo,
    description: "Durable polo shirts for school uniforms",
    sizes: ["4T", "5T", "6T", "7T", "8T"],
    colors: ["White", "Navy", "Light Blue"],
    inStock: true
  },
  {
    id: 19,
    name: "Raincoat with Hood",
    category: "Kids",
    price: 39.99,
    image: KidsRaincoat,
    description: "Waterproof raincoat with fun patterns",
    sizes: ["3T", "4T", "5T", "6T", "7T"],
    colors: ["Yellow", "Blue", "Pink", "Rainbow"],
    inStock: true
  },
  {
    id: 20,
    name: "Cotton Overalls",
    category: "Kids",
    price: 34.99,
    image: KidsOveralls,
    description: "Comfortable cotton overalls for playtime",
    sizes: ["2T", "3T", "4T", "5T"],
    colors: ["Denim", "Red", "Striped"],
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
    inStock: true,
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
    inStock: true,
  },
];

// Kids' Shop Page Component
const KidsClothing = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: "All",
    sortBy: "default",
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
    setCart((prevCart) => {
      // Check if product is already in cart
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (itemIndex >= 0) {
        // Product exists in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
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
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update item quantity in cart
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  // Filter products based on selected filters
  const filteredProducts = products
    .filter((product) => {
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
    })
    .sort((a, b) => {
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
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="shop-container">
      {/* Navigation Bar */}
      <Navbar />
      <GlobalStyles />

      {/* Page Title */}
      <div className="page-header">
        <h1>Kids' Clothing</h1>
        <p>
          Browse our collection of high-quality, comfortable children's clothing
        </p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
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
        {filteredProducts.map((product) => (
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
        <>
          <div className="cart-sidebar">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <button className="close-cart" onClick={() => setShowCart(false)}>
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <button
                  className="continue-shopping"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
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
          </div>
        </>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        

        /* Responsive styles */
        @media (max-width: 768px) {
          .filter-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          
          .cart-sidebar {
            width: 100%;
          }
        }
      `}</style>

      {/* Cart Toggle Button */}
      <button
        className="floating-cart-button"
        onClick={() => setShowCart(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#8B4513",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          zIndex: 100,
        }}
      >
        <span style={{ fontSize: "24px" }}>🛒</span>
        {cart.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              background: "red",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
            }}
          >
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KidsClothing;
