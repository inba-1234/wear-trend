import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  
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
  
  // Calculate cart subtotal
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  // Calculate tax (assuming 8%)
  const tax = subtotal * 0.08;
  
  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 9.99;
  
  // Calculate total
  const total = subtotal + tax + shipping - discount;
  
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
  
  // Apply coupon code
  const applyCoupon = () => {
    // Simple coupon code example
    if (couponCode.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1); // 10% discount
    } else if (couponCode.toUpperCase() === "SAVE20") {
      setDiscount(subtotal * 0.2); // 20% discount
    } else {
      alert("Invalid coupon code");
      setDiscount(0);
    }
  };
  
  return (
    <div className="cart-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WEAR TREND</div>
        <div className="nav-links">
          <a href="/all-clothing" className="nav-link">ALL CLOTHING</a>
          <a href="/women" className="nav-link">WOMEN</a>
          <a href="/men" className="nav-link">MEN</a>
          <a href="/kids" className="nav-link">KIDS</a>
          <a href="/login" className="nav-link">LOGIN</a>
        </div>
      </nav>
      
      <div className="page-header">
        <h1>Your Shopping Cart</h1>
      </div>
      
      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <a href="/all-clothing" className="continue-shopping-btn">Continue Shopping</a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id} className="cart-item">
                      <td className="product-cell">
                        <div className="product-info">
                          <img src={item.image} alt={item.name} />
                          <div>
                            <h3>{item.name}</h3>
                            <p className="product-category">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="price-cell">${item.price.toFixed(2)}</td>
                      <td className="quantity-cell">
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td className="total-cell">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="remove-cell">
                        <button className="remove-button" onClick={() => removeFromCart(item.id)}>×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="cart-sidebar">
              <div className="cart-summary">
                <h2>Order Summary</h2>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                {discount > 0 && (
                  <div className="summary-row discount">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="coupon-section">
                  <input 
                    type="text" 
                    placeholder="Coupon Code" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button onClick={applyCoupon}>Apply</button>
                </div>
                
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <button className="checkout-button">Proceed to Checkout</button>
                
                <a href="/all-clothing" className="continue-shopping-link">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CSS Styles */}
      <style jsx>{`
        .cart-page {
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #8B4513;
          color: white;
          margin-bottom: 30px;
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
          transition: opacity 0.2
      }
  `}</style>
    </div>
  );
};

export default CartPage;