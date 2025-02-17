import React from 'react';

const CRTEffect = ({ children }) => {
  return (
    <div className="crt-container">
      <div className="crt-content min-h-screen h-full">
        {children}
      </div>
      <div className="crt-overlay"></div>
    </div>
  );
};

export default CRTEffect;
