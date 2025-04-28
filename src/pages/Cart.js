import React from "react";

const FloatingCartButton = ({ cart, onClick }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      className="floating-cart-button"
      onClick={onClick}
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
      {totalQuantity > 0 && (
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
          {totalQuantity}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
