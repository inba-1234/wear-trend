// src/components/GlobalStyles.js
import React from "react";

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      body {
        font-family: 'Montserrat', Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f1e9; /* Soft cream background for all pages */
      }
      
      * {
        box-sizing: border-box;
      }
    `}</style>
  );
};

export default GlobalStyles;